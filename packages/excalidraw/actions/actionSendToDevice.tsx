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
        toast: { message: t("toast.fileSaved") },
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
