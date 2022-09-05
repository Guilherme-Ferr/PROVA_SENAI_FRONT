import { GlobalStyles } from "./global-styles";
import { ToastContainer } from "react-toastify";
import Router from "./router";

function App() {
  return (
    <>
      <GlobalStyles />
      <Router />
      <ToastContainer position="bottom-right" autoClose={2500} />
    </>
  );
}

export default App;
