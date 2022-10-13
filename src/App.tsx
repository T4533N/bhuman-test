import { Component, createEffect, createSignal } from "solid-js";

const App: Component = () => {
  const [showModal, setShowModal] = createSignal(false);
  const [sidePanel, setSidePanel] = createSignal(false);

  const AppIcon = (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.10686 0.143066C1.5859 0.143066 1.08628 0.350017 0.717904 0.718392C0.349529 1.08677 0.142578 1.58639 0.142578 2.10735V13.8931C0.142578 14.414 0.349529 14.9137 0.717904 15.282C1.08628 15.6504 1.5859 15.8574 2.10686 15.8574H13.8926C14.4135 15.8574 14.9132 15.6504 15.2815 15.282C15.6499 14.9137 15.8569 14.414 15.8569 13.8931V9.42878C15.8569 8.90782 15.6499 8.4082 15.2815 8.03982C14.9132 7.67145 14.4135 7.4645 13.8926 7.4645H8.53544V2.10735C8.53544 1.58639 8.32848 1.08677 7.96011 0.718392C7.59173 0.350017 7.09211 0.143066 6.57115 0.143066H2.10686ZM7.46401 7.4645H1.21401V2.10735C1.21401 1.6145 1.61401 1.21449 2.10686 1.21449H6.57115C7.06401 1.21449 7.46401 1.6145 7.46401 2.10735V7.4645ZM8.53544 14.7859V8.53592H13.8926C14.3854 8.53592 14.7854 8.93592 14.7854 9.42878V13.8931C14.7854 14.3859 14.3854 14.7859 13.8926 14.7859H8.53544ZM7.46401 14.7859H2.10686C1.61401 14.7859 1.21401 14.3859 1.21401 13.8931V8.53592H7.46401V14.7859Z"
        fill="currentColor"
        fill-opacity="0.9"
      ></path>
    </svg>
  );

  const Avatar = ({ isActive, color, notification, placeholderName }: any) => {
    return (
      <div
        style={{ background: color }}
        class={`${
          isActive ? "rounded-xl" : "rounded-[50%]"
        } w-full h-11 group grid place-items-center transition-all cursor-pointer relative select-none hover:rounded-xl`}
      >
        <div
          style={{ background: color }}
          class={`${
            isActive
              ? "h-8 w-1"
              : "h-0 w-0 opacity-0 group-hover:opacity-100 group-hover:w-1 group-hover:h-8"
          } absolute left-[-10px] rounded-tr-xl rounded-br-xl transition-all duration-300`}
        ></div>
        <h1 class="text-[15px] font-semibold text-white">{placeholderName}</h1>
        <div class="w-4 h-4 bg-red-500 rounded-xl outline outline-gray-100 absolute bottom-[1px] right-[1px] leading-[11px] text-white text-[11px] font-semibold grid place-items-center">
          {notification}
        </div>
      </div>
    );
  };

  const FilterIcon = (
    <svg
      width="14"
      height="10"
      viewBox="0 0 14 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.25 8.5C9.44891 8.5 9.63968 8.57902 9.78033 8.71967C9.92098 8.86032 10 9.05109 10 9.25C10 9.44891 9.92098 9.63968 9.78033 9.78033C9.63968 9.92098 9.44891 10 9.25 10H4.75C4.55109 10 4.36032 9.92098 4.21967 9.78033C4.07902 9.63968 4 9.44891 4 9.25C4 9.05109 4.07902 8.86032 4.21967 8.71967C4.36032 8.57902 4.55109 8.5 4.75 8.5H9.25ZM11.25 4.25C11.4489 4.25 11.6397 4.32902 11.7803 4.46967C11.921 4.61032 12 4.80109 12 5C12 5.19891 11.921 5.38968 11.7803 5.53033C11.6397 5.67098 11.4489 5.75 11.25 5.75H2.75C2.55109 5.75 2.36032 5.67098 2.21967 5.53033C2.07902 5.38968 2 5.19891 2 5C2 4.80109 2.07902 4.61032 2.21967 4.46967C2.36032 4.32902 2.55109 4.25 2.75 4.25H11.25ZM13.25 0C13.4489 0 13.6397 0.0790175 13.7803 0.21967C13.921 0.360322 14 0.551088 14 0.75C14 0.948912 13.921 1.13968 13.7803 1.28033C13.6397 1.42098 13.4489 1.5 13.25 1.5H0.75C0.551088 1.5 0.360322 1.42098 0.21967 1.28033C0.0790175 1.13968 0 0.948912 0 0.75C0 0.551088 0.0790175 0.360322 0.21967 0.21967C0.360322 0.0790175 0.551088 0 0.75 0H13.25Z"
        fill="black"
      ></path>
    </svg>
  );

  const ThreeDotMenuIcon = (
    <svg
      width="14"
      height="3"
      viewBox="0 0 14 3"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.61538 3C1.18696 3 0.776079 2.84196 0.473135 2.56066C0.170192 2.27936 0 1.89782 0 1.5C0 1.10218 0.170192 0.720644 0.473135 0.43934C0.776079 0.158035 1.18696 0 1.61538 0C2.04381 0 2.45469 0.158035 2.75763 0.43934C3.06058 0.720644 3.23077 1.10218 3.23077 1.5C3.23077 1.89782 3.06058 2.27936 2.75763 2.56066C2.45469 2.84196 2.04381 3 1.61538 3ZM7 3C6.57157 3 6.16069 2.84196 5.85775 2.56066C5.55481 2.27936 5.38462 1.89782 5.38462 1.5C5.38462 1.10218 5.55481 0.720644 5.85775 0.43934C6.16069 0.158035 6.57157 0 7 0C7.42843 0 7.83931 0.158035 8.14225 0.43934C8.44519 0.720644 8.61539 1.10218 8.61539 1.5C8.61539 1.89782 8.44519 2.27936 8.14225 2.56066C7.83931 2.84196 7.42843 3 7 3ZM12.3846 3C11.9562 3 11.5453 2.84196 11.2424 2.56066C10.9394 2.27936 10.7692 1.89782 10.7692 1.5C10.7692 1.10218 10.9394 0.720644 11.2424 0.43934C11.5453 0.158035 11.9562 0 12.3846 0C12.813 0 13.2239 0.158035 13.5269 0.43934C13.8298 0.720644 14 1.10218 14 1.5C14 1.89782 13.8298 2.27936 13.5269 2.56066C13.2239 2.84196 12.813 3 12.3846 3Z"
        fill="black"
        fill-opacity="0.8"
      ></path>
    </svg>
  );

  const UserPost = ({ body, orderUrl, transNameAction, transTitle }: any) => {
    return (
      <div
        onClick={() => {
          setSidePanel(true);
        }}
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
            <svg
              width="2"
              height="2"
              viewBox="0 0 2 2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="1"
                cy="1"
                r="1"
                fill="black"
                fill-opacity="0.6"
              ></circle>
            </svg>
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
                <span class="text-[15px] font-medium text-[#494949] leading-[22px]">
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

  const SearchIcon = (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.86914 9.86963L12.9996 13.0001"
        stroke="#86868B"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M5.95652 10.913C8.69393 10.913 10.913 8.69393 10.913 5.95652C10.913 3.21911 8.69393 1 5.95652 1C3.21911 1 1 3.21911 1 5.95652C1 8.69393 3.21911 10.913 5.95652 10.913Z"
        stroke="#86868B"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
    </svg>
  );

  const ProviderAccount = ({ name }) => {
    return (
      <button class="grid place-items-center px-2 py-1 transition-all w-[254px] duration-150 hover:bg-gray-100 rounded-lg">
        <div class="items-center flex justify-between w-[238px]">
          <div class="flex gap-[6px] items-center">
            <div class="px-[5.6px] py-[3px]">
              <svg
                width="14"
                height="18"
                viewBox="0 0 14 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.47884 6.88316C6.85284 6.27916 5.96684 5.81616 5.96684 5.08016C5.96684 4.45816 6.47784 4.10316 7.38984 4.10316C9.05684 4.10316 10.7688 4.74516 11.9478 5.32316L12.6138 1.21216C11.6788 0.766156 9.76684 0.0351562 7.12384 0.0351562C5.25384 0.0351562 3.69884 0.524156 2.58784 1.43616C1.43284 2.39016 0.830843 3.77016 0.830843 5.43616C0.830843 8.45916 2.67784 9.74816 5.67784 10.8392C7.61384 11.5272 8.25684 12.0172 8.25684 12.7732C8.25684 13.5052 7.62784 13.9282 6.49484 13.9282C5.09184 13.9282 2.77884 13.2392 1.26384 12.3502L0.589844 16.5072C1.89384 17.2392 4.29484 17.9952 6.78684 17.9952C8.76284 17.9952 10.4108 17.5282 11.5218 16.6392C12.7668 15.6622 13.4118 14.2172 13.4118 12.3502C13.4118 9.25916 11.5228 7.97016 8.47684 6.88216H8.47884V6.88316Z"
                  fill="black"
                ></path>
              </svg>
            </div>
            <h1 class="text-[13px] font-medium leading-4 text-gray-500 h-4">
              {name}
            </h1>
          </div>
          <span class="text-[13px] leading-4 font-medium">2</span>
        </div>
      </button>
    );
  };

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
            <svg
              width="2"
              height="2"
              viewBox="0 0 2 2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="1" cy="1" r="1" fill="#86868B"></circle>
            </svg>
            <div class="text-[13px] leading-4 text-gray-400">
              Last update 20 min ago
            </div>
          </div>
          <div class="w-full items-center flex justify-between mt-[10px]">
            <div class="flex gap-[6px]">
              <div class="px-[0.5px] py-[3.5px]">
                <svg
                  width="16"
                  height="10"
                  viewBox="0 0 16 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.5 0.5H11V1.5H0.5V0.5ZM5 4.5H15.5V5.5H5V4.5ZM0.5 8.5H11V9.5H0.5V8.5Z"
                    fill="#86868B"
                  ></path>
                </svg>
              </div>
              <div class="text-[13px] leading-4 text-gray-400">5.8k events</div>
            </div>
            <div class="py-[10px] px-[5px] transition-all duration-150 hover:bg-gray-300 rounded-md cursor-pointer grid place-items-center w-6 h-6">
              <svg
                width="14"
                height="3"
                viewBox="0 0 14 3"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.61538 3C1.18696 3 0.776079 2.84196 0.473135 2.56066C0.170192 2.27936 0 1.89782 0 1.5C0 1.10218 0.170192 0.720644 0.473135 0.43934C0.776079 0.158035 1.18696 0 1.61538 0C2.04381 0 2.45469 0.158035 2.75763 0.43934C3.06058 0.720644 3.23077 1.10218 3.23077 1.5C3.23077 1.89782 3.06058 2.27936 2.75763 2.56066C2.45469 2.84196 2.04381 3 1.61538 3ZM7 3C6.57157 3 6.16069 2.84196 5.85775 2.56066C5.55481 2.27936 5.38462 1.89782 5.38462 1.5C5.38462 1.10218 5.55481 0.720644 5.85775 0.43934C6.16069 0.158035 6.57157 0 7 0C7.42843 0 7.83931 0.158035 8.14225 0.43934C8.44519 0.720644 8.61539 1.10218 8.61539 1.5C8.61539 1.89782 8.44519 2.27936 8.14225 2.56066C7.83931 2.84196 7.42843 3 7 3ZM12.3846 3C11.9562 3 11.5453 2.84196 11.2424 2.56066C10.9394 2.27936 10.7692 1.89782 10.7692 1.5C10.7692 1.10218 10.9394 0.720644 11.2424 0.43934C11.5453 0.158035 11.9562 0 12.3846 0C12.813 0 13.2239 0.158035 13.5269 0.43934C13.8298 0.720644 14 1.10218 14 1.5C14 1.89782 13.8298 2.27936 13.5269 2.56066C13.2239 2.84196 12.813 3 12.3846 3Z"
                  fill="#494949"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const TransOverview = ({}) => {
    return (
      <div class="flex gap-3 min-h-fit transition-all duration-150 cursor-pointer hover:bg-[#F2F2F2] px-2 py-[10px] rounded-xl items-start w-full min-w-[358px]">
        <div
          class="w-10 h-10 min-w-[40px] min-h-[40px] grid place-items-center select-none rounded-full text-white"
          style="background: rgb(217, 202, 4);"
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
    );
  };

  return (
    <div class="min-w-[100vw] min-h-[100vh] h-full w-full flex overflow-hidden ">
      <div class="bg-gray-100 h-screen w-16 min-w-[64px] px-[10px] py-2 flex flex-col items-center gap-2">
        <div class="bg-gray-200 h-11 w-full rounded-xl"></div>
        <button
          onClick={() => {
            setShowModal(true);
          }}
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
        <Avatar
          placeholderName="B"
          color="rgb(92, 191, 167)"
          notification={2}
        />
      </div>
      <div
        id="sidebar"
        class="h-screen transactions overflow-y-auto !overflow-x-hidden border-l border-r border-gray-300 relative min-w-[368px] scrollbar"
      >
        <div class="h-12 border-b border-gray-300 grid place-items-center">
          <div
            class="bg-gray-100 grid place-items-center py-3 border-b border-l border-r border-gray-200 fixed top-0 h-[48px]"
            style={{
              width: "368px",
            }}
          >
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
        <div class="flex flex-col gap-[4px] p-2 w-full">
          <TransOverview />
          <TransOverview />
          <TransOverview />
          <TransOverview />
          <TransOverview />
          <TransOverview />
          <TransOverview />
          <TransOverview />
          <TransOverview />
          <TransOverview />
          <TransOverview />
          <TransOverview />
          <TransOverview />
          <TransOverview />
        </div>
        <div
          class="bottom-0 w-full h-12 fixed bg-gray-100 grid place-items-center border-t border-gray-300 border-r"
          style={{
            width: "368px",
          }}
        >
          <div class="flex items-center justify-between w-full px-2 py-3">
            <div class="flex gap-[2px]">
              <select class="bg-white border border-gray-300 rounded-[4px] text-[13px] font-normal leading-6 text-gray-500 appearance-none select-custom px-5">
                <option>25</option>
                <option>50</option>
                <option>100</option>
                <option>150</option>
              </select>
              <div class="text-[13px] font-normal  leading-6 text-gray-500">
                of 299
              </div>
            </div>
            <div class="flex gap-1 items-center">
              <div class="px-[9px] py-[6px] transition-all duration-150 cursor-pointer rounded-md">
                <svg
                  width="8"
                  height="14"
                  viewBox="0 0 8 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 1L1 7L7 13"
                    stroke="black"
                    stroke-opacity="0.4"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
              <div class="flex items-center gap-1">
                <div class="bg-white border border-gray-300 grid place-items-center p-1 rounded-[4px]">
                  <input
                    class="text-[13px] text-black leading-4 font-normal w-4 h-4 outline-none text-center"
                    placeholder="1"
                    type="text"
                  />
                </div>
                <div class="text-[13px] leading-4 font-normal text-gray-500">
                  of 299
                </div>
              </div>
              <div class="px-[9px] py-[6px] transition-all duration-150 hover:bg-gray-300 cursor-pointer rounded-md">
                <svg
                  width="8"
                  height="14"
                  viewBox="0 0 8 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 13L7 7L1 1"
                    stroke="#1D1D1F"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full h-full">
        <div class="flex flex-col w-full h-screen justify-end p-3 overflow-y-auto">
          <div class="flex gap-4 w-[680px]">
            <div class="w-24 h-24 min-w-[96px] min-h-[96px] rounded-full grid place-items-center bg-[#60B495]">
              <h1 class="text-2xl font-semibold text-white">L</h1>
            </div>
            <div class="flex flex-col gap-1">
              <h1 class="text-2xl text-gray-900 font-semibold">
                Leslie Alexander
              </h1>
              <p class="text-gray-500 text-[15px]">
                All your interactions and the actions from Leslie Alexander will
                be visible here. You can also tag your team, add comments and
                more.
              </p>
            </div>
          </div>
          <div class="mt-6 border-b border-[#D2D2D7] w-full"></div>
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
                      src="/assets/robot-image.svg"
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
                    <span class="font-semibold">Reason:</span>{" "}
                    Merchandise/Services not received
                  </div>
                  <div class="text-[15px] text-gray-900 leading-[22px]">
                    <span class="font-semibold">Institution:</span> Bank of
                    America
                  </div>
                </div>
              }
            />
          </div>
        </div>
      </div>

      {/* sidepanel */}
      <div
        class={`${
          sidePanel() ? "w-[50%]" : "w-0"
        } transition-all duration-200 ease-in-out h-screen border-l rounded-tl-xl rounded-bl-xl border-gray-300`}
      />

      {/* modal */}

      <div
        class={`fixed inset-0 z-10 w-screen h-screen grid place-items-center transition-all duration-300 opacity-0 ${
          showModal() ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div
          onClick={() => {
            setShowModal(false);
          }}
          class="fixed inset-0 bg-gray-100 bg-opacity-70 transition-opacity"
        />

        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div class="relative transform overflow-hidden rounded-3xl bg-white text-left shadow-xl transition-all sm:w-full">
            <div
              style={{ "box-shadow": "rgba(0, 0, 0, 0.16) 0px 4px 16px" }}
              class="w-[822px] h-[650px] bg-white  flex items-start"
            >
              <div class="w-[270px] flex flex-col h-full border-r border-gray-300">
                <div class="bg-gray-100 grid place-items-center py-3 border-b border-l border-r border-gray-200  w-full h-[48px] rounded-tl-3xl">
                  <div class="flex items-center justify-between gap-2 w-full h-full px-2 py-[2px]">
                    <div class="p-1">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.86914 9.86963L12.9996 13.0001"
                          stroke="#86868B"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M5.95652 10.913C8.69393 10.913 10.913 8.69393 10.913 5.95652C10.913 3.21911 8.69393 1 5.95652 1C3.21911 1 1 3.21911 1 5.95652C1 8.69393 3.21911 10.913 5.95652 10.913Z"
                          stroke="#86868B"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </div>
                    <input
                      placeholder="Search anything"
                      class="w-full h-full outline-none bg-transparent rounded-sm"
                      autocomplete="off"
                    />
                  </div>
                </div>
                {/* stripe */}
                <div class="p-2">
                  <div class="flex flex-col gap-[2px]">
                    <ProviderAccount name="Stripe" />
                    <ProviderAccount name="BrainTree" />
                    <ProviderAccount name="Square" />
                  </div>
                </div>
              </div>

              <div class="flex gap-[2px] flex-col pt-[56px] px-3 h-full rounded-tr-3xl rounded-br-3xl">
                <MIDContainer />
                <MIDContainer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
