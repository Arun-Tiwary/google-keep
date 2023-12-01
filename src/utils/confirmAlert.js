import { confirmAlert } from "react-confirm-alert";

export const alertConfitm = (
  title = "Confirm to submit",
  message = "Are you sure to do this.",
  yesLabel = "yes",
  yesFunc = () => {},
  noLabel = "no",
  noFunc = () => {}
) => {
  confirmAlert({
    title: title,
    message: message,
    buttons: [
      {
        label: yesLabel,
        onClick: yesFunc,
      },
      {
        label: noLabel,
        onClick: noFunc,
      },
    ],
  });
};
