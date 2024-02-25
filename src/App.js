import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Message from "./components/Message";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
function App() {
  return (
    <div className="App">
      <ParentComponent></ParentComponent>
      {/* <EventBind></EventBind> */}
      {/* <FunctionClick></FunctionClick>
      <ClassClick></ClassClick> */}

      {/* <Counter></Counter> */}
      {/* <Message></Message> */}
      {/* <Greet></Greet> */}

      {/* <Greet name="duy" heroName="Batman">
        <p>this is children</p>
      </Greet>
      <Greet name="lam" />
      <Greet name="huynh" />
      <Welcome name="jasdfjhashj" heroName="Batman"></Welcome> */}
    </div>
  );
}

export default App;
