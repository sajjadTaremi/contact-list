import { ToastProvider, useToasts } from "react-toast-notifications";

export const ToastDemo = () => {
  const { addToast } = useToasts();
  return (
    <button
      onClick={() =>
        addToast("مخاطب جدید ذخیره شد", {
          appearance: "success",
          autoDismiss: true,
        })
      }
      className="btn-save"
      type="submit"
    >
      ذخیره مخاطب
    </button>
  );
};
export const ToastBtn = () => (
  <ToastProvider>
    <ToastDemo />
  </ToastProvider>
);

export const ToastDemoDelet = ({ onDelet, id }) => {
  const { addToast } = useToasts();
  return (
    <button
      onClick={() => {
        onDelet(id);
        addToast("مخاطب حذف شد.", { appearance: "error", autoDismiss: true });
      }}
      // onClick={() =>
      //   addToast("مخاطب حذف شد.", { appearance: "error", autoDismiss: true })
      // }
      className="btn-Delet"
      type="submit"
    >
      حذف
    </button>
  );
};

export const ToastBtnDelet = ({ onDelet, id, addToast }) => (
  <ToastProvider>
    <ToastDemoDelet onDelet={onDelet} id={id} useToasts={addToast} />
  </ToastProvider>
);
