import * as React from 'react';
import Dialog from 'rc-dialog';
import '../../assets/index.less';

const { useState } = React;

const Demo = () => {
  const [showDialog, setShowDialog] = useState(false);

  const onToggleDialog = () => {
    setShowDialog(value => !value);
  };

  const dialog = (
    <Dialog
      visible={showDialog}
      animation="zoom"
      maskAnimation="fade"
      onClose={onToggleDialog}
      forceRender
    >
      <p>basic modal</p>
      <p><button type="button" onClick={evt => evt.stopPropagation()}>show drawer</button></p>
      <div style={{ height: 200 }} />
    </Dialog>
  );
  return (
    <div>
      <button type="button" onClick={onToggleDialog}>open dialog</button>
      {dialog}
    </div>
  );
};

export default Demo;
