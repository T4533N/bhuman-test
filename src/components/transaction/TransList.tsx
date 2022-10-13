import { For } from "solid-js";
import TransOverview from "./TransOverview";

function TransList() {
  return (
    <div>
      <div class="flex flex-col gap-[2px] p-2 w-full">
        <For
          each={[
            "rgb(55, 41, 193)",
            "rgb(196, 167, 129)",
            "rgb(72, 233, 111)",
            "rgb(226, 196, 229)",
            "rgb(39, 93, 56)",
            "rgb(222, 219, 113)",
            "rgb(122, 40, 132)",
            "rgb(122, 62, 221)",
            "rgb(122, 180, 34)",
            "rgb(159, 85, 124)",
            "rgb(52, 139, 125)",
            "rgb(107, 213, 247)",
            "rgb(32, 107, 140)",
            "rgb(50, 213, 206)",
            "rgb(46, 248, 220)",
          ]}
        >
          {(color, index) => <TransOverview color={color} />}
        </For>
      </div>
    </div>
  );
}

export default TransList;
