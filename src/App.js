import "./App.css";
import CreateArea from "./components/KeepNotes";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Notes from "./components/Note";
import { toast, Toaster, ToastBar } from "react-hot-toast";
// import "react-confirm-alert/src/react-confirm-alert.css";
function App() {
  return (
    <div className="App">
      <CreateArea />
      <Footer />
    </div>
  );
}

export default App;
