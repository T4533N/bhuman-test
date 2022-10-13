import {
  FilterIcon,
  LeftArrowIcon,
  RightArrowIcon,
  SearchIcon,
  ThreeDotMenuIcon,
} from "../common/Icons";

function TotalPagesContainer() {
  return (
    <div class="bottom-0 w-full h-12 sticky bg-gray-100 grid place-items-center border-t border-gray-300 border-r">
      <div class="flex items-center justify-between px-2 py-3 w-full">
        <div class="flex gap-[2px]">
          <select class="bg-white border border-gray-300 rounded-[4px] text-[13px] font-normal leading-6 text-gray-600 appearance-none select-custom px-5">
            <option>25</option>
            <option>50</option>
            <option>100</option>
            <option>150</option>
          </select>
          <div class="text-[13px] font-normal  leading-6 text-gray-900">
            of 299
          </div>
        </div>
        <div class="flex gap-1 items-center">
          <div class="px-[9px] py-[6px] transition-all duration-150 cursor-pointer rounded-md">
            {LeftArrowIcon}
          </div>
          <div class="flex items-center gap-1">
            <div class="bg-white border border-gray-300 grid place-items-center p-1 rounded-[4px]">
              <input
                class="text-[13px] text-black placeholder-gray-600 leading-4 font-normal w-4 h-4 outline-none text-center"
                placeholder="1"
                type="text"
              />
            </div>
            <div class="text-[13px] leading-4 font-normal text-gray-900">
              of 299
            </div>
          </div>
          <div class="px-[9px] py-[6px] transition-all duration-150 hover:bg-gray-300 cursor-pointer rounded-md">
            {RightArrowIcon}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TotalPagesContainer;
