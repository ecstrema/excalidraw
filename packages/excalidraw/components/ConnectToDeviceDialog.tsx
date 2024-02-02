import { Dialog } from "./Dialog";
import DialogActionButton from "./DialogActionButton";

const connectDevice = () => {
  // TODO: pair device
  console.log("TODO: pair device");
};

export const ConnectToDeviceDialog = ({
  onCloseRequest,
}: {
  onCloseRequest: () => void;
}) => {
  return (
    <Dialog onCloseRequest={onCloseRequest} size="small" title={false}>
      <h3>Connect device</h3>
      <p>To project the image, first connect to the device.</p>
      <div className="confirm-dialog-buttons">
        <DialogActionButton
          onClick={connectDevice}
          data-testid="connect-device"
          actionType="primary"
          label="Connect device" // TODO: translate
        />
        <DialogActionButton
          label="Cancel" // TODO: translate
          onClick={onCloseRequest}
        />
      </div>
    </Dialog>
  );
};
