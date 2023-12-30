import { toast } from "react-toastify";

export const useToast = () => {
  const errorMsg = toast.error;
  const successMsg = toast.success;

  return { errorMsg, successMsg };
};
