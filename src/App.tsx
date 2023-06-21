import Router from "./routes";
import "./styles/global.css";
import { ToastContainer, toast } from "react-toastify";

function App() {
  return (
    <>
      <ToastContainer
        position="bottom-center"
        autoClose={2800}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Router />
    </>
  );
}

export default App;
