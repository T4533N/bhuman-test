import { DotCircle, VisaSymbol } from "../Common/Icons";
import panelState from "../../state/SidePanelState";

const UserPost = ({ body, orderUrl, transNameAction, transTitle }: any) => {
  const { openPanel } = panelState;

  return (
    <div
      onClick={openPanel}
      class="flex gap-3 items-start p-3 transition-all hover:bg-[#F2F2F2] rounded-xl"
    >
      <div class="w-10 h-10 rounded-full bg-[#60B495] text-white grid place-items-center mt-1">
        L
      </div>
      <div class="flex flex-col gap-3">
        <div class="flex gap-1 items-center">
          <div class="text-[15px] font-semibold leading-[22px] text-gray-900">
            <span>Leslie Alexander</span>{" "}
            <span class="text-black opacity-60">{transNameAction} an</span>{" "}
            <span>Order</span>
          </div>
          {DotCircle}
          <span class="text-[13px] text-black opacity-60 leading-5">10h</span>
        </div>
        <div class="flex gap-[6px] flex-col">
          <div class="text-[17px] font-semibold text-gray-900 leading-[22.1px]">
            {transTitle}
          </div>
          {body ? (
            body
          ) : (
            <div class="text-[15px] text-gray-900 leading-[22px]">
              Order placed on 2021-01-01
            </div>
          )}
          <div class="mt-[2px] flex gap-2 items-center ">
            <div class="flex gap-1 items-center h-6">
              {VisaSymbol}
              <span class="text-[15px] font-medium text-[#494949] leading-[22px]">
                5567
              </span>
            </div>
            {DotCircle}
            <span class="text-[15px] font-medium text-[#494949] leading-[22px]">
              $258.69
            </span>
          </div>
        </div>

        {orderUrl ? orderUrl : null}
      </div>
    </div>
  );
};

export default UserPost;
