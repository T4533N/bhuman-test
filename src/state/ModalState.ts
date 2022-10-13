import { createSignal, createMemo, createRoot } from "solid-js";

function createModalState() {
  const [showModal, setShowModal] = createSignal(false);

  const closeModal = () => setShowModal(false);
  const openModal = () => setShowModal(true);

  return { showModal, setShowModal, closeModal, openModal };
}

export default createRoot(createModalState);
