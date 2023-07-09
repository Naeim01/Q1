import './App.css';
import Class from './component/Class';
import Function from './component/Function';
import LogoReact from './assests/img/React-icon.svg.png'
import LogoNext from './assests/img/nextjs3.webp'


function App() {
  return (
    <div className="App">
      <Function title="i am card component 1" desc="These data passed from my parent" logo={LogoReact} />
      <Function title="i am card component 2" desc="These data passed from my parent 1 am 2" logo={LogoNext} />
      <Class title="i am card component 1" desc="These data passed from my parent" logo={LogoReact} />
      <Class title="i am card component 2" desc="These data passed from my parent 1 am 2" logo={LogoNext} />
    </div>
  );
}

export default App;
