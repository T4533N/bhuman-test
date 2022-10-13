import panelState from "../../state/SidePanelState";

const RightSidePanel = () => {
  const { showPanel } = panelState;
  return (
    <div
      class={`${
        showPanel() ? "w-[250%]" : "w-0"
      } bg-white z-50 transition-all duration-200 ease-in-out h-screen border-l rounded-tl-xl rounded-bl-xl border-gray-300`}
    />
  );
};

export default RightSidePanel;
