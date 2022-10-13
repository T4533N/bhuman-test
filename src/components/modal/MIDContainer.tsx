import { DotCircle, EventIcon, ThreeDotMenuIcon } from "../Common/Icons";

const MIDContainer = () => {
  return (
    <div class="p-2 hover:bg-gray-100 transition-all duration-200 rounded-lg">
      <div class="flex flex-col gap-[6px]">
        <div class="flex items-center justify-between w-[512px]">
          <h3 class="text-[15px] leading-5 font-semibold">*****8893</h3>
          <span class="text-[13px] leading-4 text-gray-400">Apr 25</span>
        </div>
        <div class="flex items-center gap-2">
          <div class="flex items-center gap-[6px]">
            <div class="p-1">
              <div class="h-2 w-2 bg-[#18B73B] rounded-full"></div>
            </div>
          </div>
          <div class="text-[13px] leading-4 font-medium text-gray-700">
            Connected
          </div>
          {DotCircle}
          <div class="text-[13px] leading-4 text-gray-400">
            Last update 20 min ago
          </div>
        </div>
        <div class="w-full items-center flex justify-between mt-[10px]">
          <div class="flex gap-[6px]">
            <div class="px-[0.5px] py-[3.5px]">{EventIcon}</div>
            <div class="text-[13px] leading-4 text-gray-400">5.8k events</div>
          </div>
          <div class="py-[10px] px-[5px] transition-all duration-150 hover:bg-gray-300 rounded-md cursor-pointer grid place-items-center w-6 h-6">
            {ThreeDotMenuIcon}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MIDContainer;
