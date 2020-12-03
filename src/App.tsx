import React from 'react';
import './App.scss';
import { Header, Canvas } from './components';
const App = () => {
  return (
    <div className="app">
      <Header />
      <Canvas />
      <footer>
        To leave a comment, mouseover <i>cross</i> on an image and click the
        left mouse button <i>mouse</i>
      </footer>
    </div>
  );
}

export default App;
