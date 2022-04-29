import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import * as actions from 'loot-core/src/client/actions';
import { send } from 'loot-core/src/platform/client/fetch';
import {
  View,
  Text,
  Button,
  Tooltip,
  Menu
} from 'loot-design/src/components/common';
import { colors } from 'loot-design/src/style';
import ExclamationSolid from 'loot-design/src/svg/v1/ExclamationSolid';

function LoggedInUser({
  history,
  files,
  budgetId,
  userData,
  getUserData,
  setAppState,
  signOut,
  pushModal,
  closeBudget,
  style,
  color
}) {
  let [loading, setLoading] = useState(true);
  let [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    getUserData().then(() => setLoading(false));
  }, []);

  async function onChangePassword() {
    await closeBudget();
    window.__history.push('/change-password');
  }

  function onMenuSelect(type) {
    setMenuOpen(false);

    switch (type) {
      case 'change-password':
        onChangePassword();
        break;
      case 'sign-out':
        signOut();
        break;
      default:
    }
  }

  function onClick() {
    setMenuOpen(true);
  }

  if (loading) {
    return (
      <Text style={[{ color: colors.n5, fontStyle: 'italic' }, style]}>
        Loading account...
      </Text>
    );
  } else if (userData) {
    if (userData.offline) {
      return <View style={[{ color }, style]}>Offline</View>;
    }

    return (
      <View style={[{ flexDirection: 'row', alignItems: 'center' }, style]}>
        <Button bare onClick={onClick} style={{ color }}>
          Server
        </Button>

        {menuOpen && (
          <Tooltip
            position="bottom-right"
            style={{ padding: 0 }}
            onClose={() => setMenuOpen(false)}
          >
            <Menu
              onMenuSelect={onMenuSelect}
              items={[
                { name: 'change-password', text: 'Change password' },
                { name: 'sign-out', text: 'Sign out' }
              ].filter(x => x)}
            />
          </Tooltip>
        )}
      </View>
    );
  } else {
    return <View style={[{ color }, style]}>Not logged in</View>;
  }
}

export default connect(
  state => ({
    userData: state.user.data,
    files: state.budgets.allFiles,
    budgetId: state.prefs.local && state.prefs.local.id
  }),
  actions
)(withRouter(LoggedInUser));
