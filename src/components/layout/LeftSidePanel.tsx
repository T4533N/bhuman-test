import TransList from "../transaction/TransList";
import SearchContainer from "../appbar/SearchContainer";
import TotalPagesContainer from "./TotalPagesContainer";

function LeftSidePanel() {
  return (
    <div
      id="split-0"
      class="border-l border-r border-gray-300 relative min-w-[368px] h-screen hover:scrollbar no-scrollbar !overflow-x-hidden"
    >
      <SearchContainer />
      <TransList />
      <TotalPagesContainer />
    </div>
  );
}

export default LeftSidePanel;
