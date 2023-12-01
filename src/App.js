import "./App.css";
import "./styles/index.scss";
import { toast, Toaster, ToastBar } from "react-hot-toast";
import "react-confirm-alert/src/react-confirm-alert.css";
import { Router } from "react-router-dom";
import AppRouter from "./router";
function App() {
  return (
    <div className="App">
      <AppRouter />
      {/* <CreateArea /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
