import { useState } from "react";
import "./App.css";
import FrontCard from "./Components/FrontCard";
import Form from "./Components/Form";

function App() {
  const [input, setInput] = useState({
    name: "",
    cardNumber: "",
    yy: "",
    mm: "",
    cvc: "",
  });

  const [confirm, setConfirm] = useState(false);

  return (
    <div className="app-main">
      <Form
        input={input}
        setInput={setInput}
        confirm={confirm}
        setConfirm={setConfirm}
      />

      <FrontCard
        input={input}
        setInput={setInput}
        confirm={confirm}
        setConfirm={setConfirm}
      />
    </div>
  );
}
export default App;