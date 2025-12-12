import { motion, AnimatePresence } from "framer-motion";

interface ConfirmModalProps {
  open: boolean;
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function ConfirmModal({
  open,
  title,
  message,
  confirmText = "Confirm",
  cancelText = "Cancel",
  onConfirm,
  onCancel
}: ConfirmModalProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-[999]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="
              bg-white rounded-3xl shadow-xl p-8 w-full max-w-sm
              flex flex-col items-center text-center
            "
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
          >
            <div className="text-5xl mb-4">💳</div>

            <h2 className="text-xl font-bold mb-2">{title}</h2>
            <p className="text-gray-600 mb-6">{message}</p>

            <div className="flex gap-3 w-full mt-2">
              <button
                className="
                  flex-1 py-3 rounded-xl border text-gray-600
                  hover:bg-gray-100 transition
                "
                onClick={onCancel}
              >
                {cancelText}
              </button>

              <button
                className="
                  flex-1 py-3 rounded-xl bg-primary text-white
                  hover:opacity-90 transition shadow-sm
                "
                onClick={onConfirm}
              >
                {confirmText}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
