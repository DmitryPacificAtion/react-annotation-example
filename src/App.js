import React from 'react';
import './App.scss';
import { Header } from './components'
const App = () => {
  return (
    <div className="app">
      <Header />
      <footer>
        To leave a comment, mouseover <i>cross</i> on an image and click the
        left mouse button <i>mouse</i>
      </footer>
    </div>
  );
}

export default App;
