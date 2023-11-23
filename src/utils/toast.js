import toast from "react-hot-toast";

export const successToast = (message = "Successfully created!") => {
  toast.success(message);
};

export const errorToast = (message = "something went wrong") => {
  toast.error(message);
};
