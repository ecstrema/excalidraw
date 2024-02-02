import { register } from "./register";
import { KEYS } from "../keys";
import { t } from "../i18n";
import { ToolButton } from "../components/ToolButton";
import { SendIcon } from "../components/icons";
import { Button } from "../components/Button";

export const actionSendToDevice = register({
  name: "sendToDevice",
  trackEvent: { category: "canvas" },
  perform: (elements, appState, _, app) => {
    return {
      appState: {
        ...appState,
        openDialog: { name: "connectToDevice" },
        // TODO: translate
        // TODO: send to device
        // TODO: this should probably be a super evident button on the bottom of the screen, instead of this hidden button.
        // toast: { message: "TODO: send to device" },
      },
      commitToHistory: false,
    };
  },
  keyTest: (event) =>
    !event.shiftKey && event.code === KEYS.ENTER && event[KEYS.CTRL_OR_CMD],
  contextItemLabel: "labels.sendToDevice",
  PanelComponent: ({ appState, updateData }) => (
    <Button
      title={t("buttons.sendToDevice")}
      aria-label={t("buttons.sendToDevice")}
      onSelect={updateData}
      data-testid="send-to-device"
      style={{ width: "auto", height: "auto", display: "flex", gap: 2 }}
    >
      {SendIcon}
      {t("buttons.sendToDevice")}
    </Button>
  ),
});
