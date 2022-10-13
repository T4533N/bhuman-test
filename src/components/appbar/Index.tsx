import { AppIcon } from "../common/Icons";
import Avatar from "./Avatar";
import modalState from "../../state/ModalState";

function AppBar() {
  const { openModal } = modalState;

  return (
    <div class="bg-gray-100 h-screen w-16 min-w-[64px] px-[10px] py-2 flex flex-col items-center gap-2">
      <div class="bg-gray-200 h-11 w-full rounded-xl"></div>
      <button
        onClick={openModal}
        class="bg-gray-200 rounded-[50%] hover:rounded-xl transition-all h-11 w-full grid place-items-center cursor-pointer"
      >
        {AppIcon}
      </button>
      <div class="border-b border-b-gray-200 w-full"></div>

      {/* first letter avatar */}
      <Avatar
        placeholderName="A"
        isActive={true}
        color="rgba(0, 0, 0, 0.898)"
        notification={1}
      />
      <Avatar placeholderName="B" color="rgb(92, 191, 167)" notification={2} />
    </div>
  );
}

export default AppBar;
