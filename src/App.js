import "./App.css";
import MainPage from "./components/MainPage";
import FormRegister from "./components/Form/FormRegister";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FormRegister />} />
          <Route path="/main" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
