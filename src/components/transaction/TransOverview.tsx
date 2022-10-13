const TransOverview = ({ color }) => {
  return (
    <>
      <div class="flex gap-3 min-h-fit transition-all duration-150 cursor-pointer hover:bg-[#F2F2F2] px-2 py-[10px] rounded-xl items-start w-full min-w-[358px]">
        <div
          class="w-10 h-10 min-w-[40px] min-h-[40px] grid place-items-center select-none rounded-full text-white"
          style={`background: ${color}`}
        >
          <h1 class="text-[15px] font-semibold">L</h1>
        </div>
        <div class="flex gap-[6px] flex-col w-full">
          <div class="w-full flex items-center justify-between">
            <h1 class="text-[15px] leading-5 font-semibold">
              Leslie Alexander
            </h1>
            <span class="text-[13px] text-[#86868B]">1 Jan</span>
          </div>
          <h3 class="text-[13px] font-medium text-[#494949] leading-4">
            Merchandise / Services not recieved
          </h3>
          <div class="mt-[2px] flex gap-2 items-center">
            <div class="flex gap-1 items-center h-6">
              <svg
                width="24"
                height="8"
                viewBox="0 0 24 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.112 0.262024L5.97 7.75802H3.92L2.374 1.77502C2.28 1.40702 2.199 1.27202 1.913 1.11702C1.447 0.864023 0.677 0.627024 0 0.479024L0.046 0.262024H3.346C3.56165 0.261808 3.77027 0.338688 3.93421 0.478788C4.09815 0.618888 4.2066 0.812978 4.24 1.02602L5.057 5.36402L7.075 0.262024H9.112ZM17.145 5.31102C17.153 3.33202 14.409 3.22302 14.428 2.33902C14.434 2.07002 14.69 1.78402 15.25 1.71102C15.9063 1.64869 16.5672 1.76478 17.163 2.04702L17.503 0.457024C16.923 0.238969 16.3087 0.1262 15.689 0.124023C13.772 0.124023 12.423 1.14402 12.411 2.60302C12.399 3.68202 13.374 4.28302 14.109 4.64302C14.865 5.01002 15.119 5.24602 15.115 5.57402C15.11 6.07802 14.513 6.29902 13.955 6.30802C12.98 6.32302 12.415 6.04502 11.963 5.83502L11.612 7.47702C12.065 7.68502 12.901 7.86702 13.768 7.87502C15.805 7.87502 17.138 6.86902 17.145 5.31102ZM22.206 7.75802H24L22.435 0.262024H20.779C20.6021 0.260384 20.4287 0.311942 20.2814 0.410012C20.1341 0.508082 20.0197 0.64814 19.953 0.812024L17.044 7.75802H19.08L19.485 6.63802H21.973L22.206 7.75802ZM20.043 5.10202L21.063 2.28702L21.651 5.10202H20.043ZM11.883 0.262024L10.28 7.75802H8.34L9.945 0.262024H11.883Z"
                  fill="#1A1F71"
                ></path>
              </svg>
              <span class="text-[13px] font-medium text-[#494949] leading-4">
                5567
              </span>
            </div>
            <svg
              width="2"
              height="2"
              viewBox="0 0 2 2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="1" cy="1" r="1" fill="#86868B"></circle>
            </svg>
            <span class="text-[13px] font-medium text-[#494949] leading-4">
              $258.69
            </span>
          </div>
        </div>
      </div>
      <div class="w-full border-b border-[#D2D2D7]" />
    </>
  );
};

export default TransOverview;
