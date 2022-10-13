import { ProviderAccountIcon } from "../Common/Icons";

const ProviderAccount = ({ name }) => {
  return (
    <button class="grid place-items-center px-2 py-1 transition-all w-[254px] duration-150 hover:bg-gray-100 rounded-lg">
      <div class="items-center flex justify-between w-[238px]">
        <div class="flex gap-[6px] items-center">
          <div class="px-[5.6px] py-[3px]">{ProviderAccountIcon}</div>
          <h1 class="text-[13px] font-medium leading-4 text-gray-500 h-4">
            {name}
          </h1>
        </div>
        <span class="text-[13px] leading-4 font-medium">2</span>
      </div>
    </button>
  );
};

export default ProviderAccount;
