import './App.css';
import Buttons from './components/Buttons.js';

function App() {
  return (
    <div className="App">
      <div>
        <Buttons size="large" color="blue">Button</Buttons>
        <Buttons size="medium" color="blue">Button</Buttons>
        <Buttons size="small" color="blue">Button</Buttons>
      </div>
      <div>
        <Buttons size="large" color="gray">Button</Buttons>
        <Buttons size="medium" color="gray">Button</Buttons>
        <Buttons size="small" color="gray">Button</Buttons>
      </div>
      <div>
        <Buttons size="large" color="pink">Button</Buttons>
        <Buttons size="medium" color="pink">Button</Buttons>
        <Buttons size="small" color="pink">Button</Buttons>
      </div>
      <div>
        <Buttons size="large" color="blue" outline>Button</Buttons>
        <Buttons size="medium" color="pink" outline>Button</Buttons>
        <Buttons size="small" color="gray" outline>Button</Buttons>
      </div>
      <div>
        <Buttons size="large" color="blue" fullWidth>Button</Buttons>
        <Buttons size="large" color="pink" fullWidth>Button</Buttons>
        <Buttons size="large" color="gray" fullWidth>Button</Buttons>
      </div>
    </div>
  );
}

export default App;
