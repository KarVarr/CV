import Header from './components/header/Header';
import LeftSide from './components/leftSide/LeftSide';
import RightSide from './components/rightSide/RightSide';

import './reset.scss';
import './app.scss';

function App() {
  return (
    <div className='App'>
      <Header />
      <div className='info'>
      <LeftSide/>
      <RightSide/>
        
      </div>
    </div>
  );
}

export default App;
