import './App.css';
import Canvas from './components/canvas/canvas';
import Heart from './components/heart/heart';
import Text from './components/text-animation/text';
import Modal from './components/modal/modal';
function App() {
  return (
    <div className="app">
      <Canvas/>
        <Heart/>
        <Text/>
        <Modal/>
    </div>
  );
}

export default App;
