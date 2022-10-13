import MIDContainer from "./MIDcontainer";
import ProviderAccount from "./ProviderAccount";
import modalState from "../../state/ModalState";

function Modal() {
  const { closeModal, showModal } = modalState;

  return (
    <div>
      <div
        class={`fixed inset-0 z-50 w-screen h-screen grid place-items-center transition-all duration-300 opacity-0 ${
          showModal() ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div
          onClick={closeModal}
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
                <div class="w-full border-b border-gray-300" />
                <MIDContainer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
