
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import { Fragment } from "react";
import PlayerForm from "./components/PlayerForm";
import Home from "./components/Home";
import QuestionForm from "./components/QuestionForm";
import AnswerForm from "./components/AnswerForm"
import Results from "./components/Results";
import 'react-toastify/dist/ReactToastify.css';
import "bootstrap/dist/css/bootstrap.css"
import "./App.css"

function App() {
  return (
    <Fragment>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/startGame" element={<PlayerForm></PlayerForm>}></Route>
        <Route path="/startGame/player1" element={<QuestionForm></QuestionForm>}></Route>
        <Route path="/startGame/player2" element={<QuestionForm></QuestionForm>}></Route>
        <Route path="/play/player1" element={<AnswerForm></AnswerForm>}></Route>
        <Route path="/play/player2" element={<AnswerForm></AnswerForm>}></Route>
        <Route path="/results" element={<Results></Results>}></Route>
      </Routes>
    </Fragment>
  );
}

export default App;
