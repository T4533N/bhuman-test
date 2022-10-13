import { createSignal, createMemo, createRoot } from "solid-js";

function createSidePanelState() {
  const [showPanel, setShowPanel] = createSignal(false);

  const closePanel = () => setShowPanel(false);
  const openPanel = () => setShowPanel(true);

  return { showPanel, setShowPanel, openPanel, closePanel };
}

export default createRoot(createSidePanelState);
