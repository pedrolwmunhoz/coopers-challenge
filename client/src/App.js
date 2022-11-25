import Header from "./components/Header";
import Home from "./components/Home";
import Todolist from "./components/Todolist";
import "./App.css"
import GoodThings from "./components/GoodThings";
import GetInTouch from "./components/GetInTouch";
import Footer from "./components/Footer";
import LoginModal from "./components/LoginModal";


function App() {
  return (
    <div className="appContainer">
      <div className="containerHome">
        <Header />
        <Home />
        <Todolist />
        <GoodThings/>
        <GetInTouch />
        <Footer />
        <div id="modalLogin" className="modal-container">
          <LoginModal />
        </div>
      </div>
    </div>
  );
}

export default App;
