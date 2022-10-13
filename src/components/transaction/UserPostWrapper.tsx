import UserPost from "./UserPost";
import RobotImage from "../../assets/robot-image.svg";

function UserPostWrapper() {
  return (
    <div class="mt-[12px] flex flex-col gap-3">
      <UserPost
        transNameAction="placed"
        transTitle="You have a new order #1"
        orderUrl={
          <a class="h-fit" href="https://orderurl.com">
            <div class="flex gap-3 items-center h-fit px-2 py-[8.5px] bg-gray-100 border border-gray-300 rounded-xl">
              <img
                width="72px"
                height="72px"
                class="rounded-xl"
                alt=""
                src={RobotImage}
              />
              <div class="w-[281px] flex flex-col gap-2 h-fit">
                <div class="text-[13px] font-normal leading-5 text-gray-500">
                  orderurl.com
                </div>
                <div class="text-[15px] font-medium leading-[22px] text-gray-900">
                  16 Places to Find Illustrations for Your Projects 📚🎨
                </div>
              </div>
            </div>
          </a>
        }
      />
      <UserPost
        transNameAction="disputed"
        transTitle="You have a new dispute #77842372 for Order #1"
        body={
          <div class="flex flex-col gap-[6px]">
            <div class="text-[15px] text-gray-900 leading-[22px]">
              <span class="font-semibold">Recieved:</span> 2020-01-01
            </div>
            <div class="text-[15px] text-gray-900 leading-[22px]">
              <span class="font-semibold">Initiated:</span> 2020-01-01
            </div>
            <div class="text-[15px] text-gray-900 leading-[22px]">
              <span class="font-semibold">Reason:</span> Merchandise/Services
              not received
            </div>
            <div class="text-[15px] text-gray-900 leading-[22px]">
              <span class="font-semibold">Institution:</span> Bank of America
            </div>
          </div>
        }
      />
    </div>
  );
}

export default UserPostWrapper;
