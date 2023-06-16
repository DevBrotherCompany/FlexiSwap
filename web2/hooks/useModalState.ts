import { useState } from "react";

export function useModalsState<TModal>() {
  const [current, setCurrent] = useState<TModal | null>(null);

  const open = (id: TModal) => {
    setCurrent(id);
  };

  const close = () => {
    setCurrent(null);
  };

  const isOpened = (id: TModal) => current === id;

  return {
    openModal: open,
    closeModals: close,
    isModalOpened: isOpened,
  };
}
