import logo from './logo.svg';
import './App.css';
import ColorBox from "./components/ColorBox";
import ColorContext, {ColorProvider} from "./contenxt/color";
import SelectColors from "./components/SelectColors";

function App() {
  return (
    <ColorProvider>
      <div>
        <SelectColors/>
        <ColorBox/>
      </div>
    </ColorProvider>
  );
}

export default App;
