import UserInfo from "../transaction/UserInfo";
import UserPostWrapper from "../transaction/UserPostWrapper";

function UserPostContainer() {
  return (
    <div id="split-1" class="w-full h-full">
      <div class="flex flex-col w-full h-screen justify-end p-3 overflow-y-auto">
        <UserInfo />
        <div class="mt-6 border-b border-[#D2D2D7] w-full"></div>
        <UserPostWrapper />
      </div>
    </div>
  );
}

export default UserPostContainer;
