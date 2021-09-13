import logo from './logo.svg';
import './App.css';
import UseState from './React-Hooks/UseState';
import UseRefDemo from './React-Hooks/UseRef';
import UseLayoutEffectDemo from './React-Hooks/UseLayoutEffect';
import ContextDemo from './React-Hooks/ContextDemo';

function App() {
  return (
    <div className="App">
      <UseState></UseState>
      <UseRefDemo></UseRefDemo>
      <br></br>
      <UseLayoutEffectDemo></UseLayoutEffectDemo>
      <ContextDemo></ContextDemo>
    </div>
  );
}

export default App;
