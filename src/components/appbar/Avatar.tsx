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

export default Avatar;
