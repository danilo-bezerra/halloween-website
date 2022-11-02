import { useState } from "react";
import { Outlet } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
