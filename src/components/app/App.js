import InputBlock from '../inputBlock/InputBlock';
import Information from '../information/Information';
import KeyboardBlock from '../keyboardBlock/KeyboardBlock';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Information />
      <InputBlock />
      <KeyboardBlock /> 
    </div>
  );
}
export default App;
