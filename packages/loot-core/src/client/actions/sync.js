import { send } from '../../platform/client/fetch';
import constants from '../constants';
import { loadPrefs } from './prefs';
import { createBudget, loadBudget } from './budgets';
import { getCategories, getAccounts, getPayees } from './queries';
import { syncAccounts } from './account';
import { setAppState } from './app';
import { pushModal } from './modals';
import { getUploadError } from '../../shared/errors';

export function unregister() {
  return async dispatch => {
    const profile = await send('unregister');
    dispatch({
      type: constants.SET_PROFILE,
      profile
    });
  };
}

export function resetSync() {
  return async (dispatch, getState) => {
    let { error } = await send('sync-reset');

    if (error) {
      alert(getUploadError(error));

      if (
        (error.reason === 'encrypt-failure' && error.meta.isMissingKey) ||
        error.reason === 'file-has-new-key'
      ) {
        dispatch(
          pushModal('fix-encryption-key', {
            onSuccess: () => {
              // TODO: There won't be a loading indicator for this
              dispatch(resetSync());
            }
          })
        );
      } else if (error.reason === 'encrypt-failure') {
        dispatch(pushModal('create-encryption-key', { recreate: true }));
      }
    } else {
      await dispatch(sync());
      await dispatch(loadPrefs());
    }
  };
}

export function sync() {
  return async (dispatch, getState) => {
    const prefs = getState().prefs.local;
    if (prefs && prefs.id) {
      let { error } = await send('sync');
      return { error };
    }
  };
}

export function syncAndDownload(accountId) {
  return async (dispatch, getState) => {
    // It is *critical* that we sync first because of transaction
    // reconciliation. We want to get all transactions that other
    // clients have already made, so that imported transactions can be
    // reconciled against them. Otherwise, two clients will each add
    // new transactions from the bank and create duplicate ones.
    let syncState = await dispatch(sync());
    if (syncState.error) {
      return { error: syncState.error };
    }

    let hasDownloaded = await dispatch(syncAccounts(accountId));

    if (hasDownloaded) {
      // Sync again afterwards if new transactions were created
      let syncState = await dispatch(sync());
      if (syncState.error) {
        return { error: syncState.error };
      }

      // `hasDownloaded` is already true, we know there has been
      // updates
      return true;
    }
    return { hasUpdated: hasDownloaded || syncState.updated };
  };
}
