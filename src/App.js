import PlayerForm from "./components/PlayerForm";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css"
import "./App.css"
import QuestionForm from "./components/QuestionForm";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/startGame" element={<PlayerForm></PlayerForm>}></Route>
      <Route path="/startGame/player1" element={<QuestionForm></QuestionForm>}></Route>
      <Route path="/startGame/player2" element={<QuestionForm></QuestionForm>}></Route>
      <Route path="/play/player1" element={<PlayerForm></PlayerForm>}></Route>
      <Route path="/play/player2" element={<PlayerForm></PlayerForm>}></Route>
      <Route path="/results" element={<PlayerForm></PlayerForm>}></Route>
    </Routes>
  );
}

export default App;
