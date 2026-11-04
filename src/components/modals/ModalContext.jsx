import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import StartProjectModal from "./StartProjectModal";
import BookingModal from "./BookingModal";
import WaitlistModal from "./WaitlistModal";
import Icon from "../Icon";

const ModalContext = createContext(null);

// eslint-disable-next-line react-refresh/only-export-components
export const useModals = () => useContext(ModalContext);

// Overlay / Toast, brief sent
function Toast({ title, body, onClose }) {
  useEffect(() => {
    const t = setTimeout(onClose, 6000);
    return () => clearTimeout(t);
  }, [onClose]);
  return (
    <div className="fixed inset-x-5 top-[84px] z-[70] flex justify-end lg:top-[112px] lg:right-[120px] lg:left-auto" role="status">
      <div className="flex items-center gap-4 rounded-[16px] bg-night px-5 py-4 shadow-modal animate-rise-in">
        <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-gold text-night">
          <Icon name="check" size={14} />
        </span>
        <div className="flex flex-col">
          <p className="t-small font-semibold text-cream">{title}</p>
          <p className="t-small text-[13px] text-sand">{body}</p>
        </div>
        <button type="button" onClick={onClose} aria-label="Dismiss" className="text-sand hover:text-cream">
          <Icon name="close" size={16} />
        </button>
      </div>
    </div>
  );
}

export function ModalProvider({ children }) {
  const [modal, setModal] = useState(null);
  const [toast, setToast] = useState(null);
  const toastId = useRef(0);

  const close = useCallback(() => setModal(null), []);
  const showToast = useCallback((title, body) => setToast({ id: ++toastId.current, title, body }), []);
  const hideToast = useCallback(() => setToast(null), []);

  const value = useMemo(
    () => ({
      openStart: (initial = []) => setModal({ type: "start", initial }),
      openBooking: () => setModal({ type: "booking" }),
      openWaitlist: (contact = "") => setModal({ type: "waitlist", contact }),
      showToast,
    }),
    [showToast],
  );

  return (
    <ModalContext.Provider value={value}>
      {children}
      {modal?.type === "start" && <StartProjectModal initial={modal.initial} onClose={close} />}
      {modal?.type === "booking" && <BookingModal onClose={close} />}
      {modal?.type === "waitlist" && (
        <WaitlistModal
          initialContact={modal.contact}
          onClose={close}
          onJoined={() => {
            close();
            showToast("You are on the list", "We will message you once, on launch day.");
          }}
        />
      )}
      {toast && <Toast key={toast.id} title={toast.title} body={toast.body} onClose={hideToast} />}
    </ModalContext.Provider>
  );
}
