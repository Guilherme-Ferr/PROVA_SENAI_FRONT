import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./pages/login/login";
import { Menu } from "./pages/menu/menu";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/menu" element={<Menu />} />
        {/* <Route path="/books/create" element={<CreateBooks />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
