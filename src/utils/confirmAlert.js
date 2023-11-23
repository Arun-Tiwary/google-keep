import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

export const alertConfitm = (
  title = "Confirm to submit",
  message = "Are you sure to do this.",
  yesFunc = () => {},
  noFunc = () => {}
) => {
  confirmAlert({
    title: title,
    message: message,
    buttons: [
      {
        label: "Yes",
        onClick: yesFunc,
      },
      {
        label: "No",
        onClick: noFunc,
      },
    ],
  });
};
