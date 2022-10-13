import { FilterIcon, SearchIcon, ThreeDotMenuIcon } from "../common/Icons";

function SearchContainer() {
  return (
    <div class="h-12 border-b border-gray-300 grid place-items-center sticky top-0">
      <div class="bg-gray-100 grid place-items-center py-3 border-b border-l border-r border-gray-200 w-full h-[48px]">
        <div class="flex items-center justify-between gap-2 w-full h-full px-2 py-[2px]">
          <div class="p-1">{SearchIcon}</div>
          <input
            placeholder="Search anything"
            class="w-full h-full outline-none bg-transparent rounded-sm"
          />

          <div class="flex gap-3">
            <button class="p-1 transition-all duration-150 hover:bg-gray-300 rounded-md">
              <div class="px-[1px] py-[3px]">{FilterIcon}</div>
            </button>
            <button class="p-1 transition-all duration-150 hover:bg-gray-300 rounded-md">
              <div class="px-[1px] py-[3px]">{ThreeDotMenuIcon}</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchContainer;
