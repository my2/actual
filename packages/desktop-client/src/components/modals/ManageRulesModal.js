import { Modal } from 'loot-design/src/components/common';
import React, { useState } from 'react';
import ManageRules from '../ManageRules';

export default function ManageRulesModal({ modalProps, payeeId }) {
  let [loading, setLoading] = useState(true);
  if (process.env.NODE_ENV === 'development') {
    if (location.pathname !== '/payees') {
      throw new Error(
        `Possibly invalid use of ManageRulesModal, add the current url '${location.pathname}' to the allowlist if you're confident the modal can never appear on top of the '/rules' page.`
      );
    }
  }
  return (
    <Modal
      title="Rules"
      padding={0}
      loading={loading}
      {...modalProps}
      style={[modalProps.style, { flex: 1, maxWidth: '90%', maxHeight: '90%' }]}
    >
      {() => <ManageRules isModal payeeId={payeeId} setLoading={setLoading} />}
    </Modal>
  );
}
