import Home from './component/home/Home';
import BackToTop from './component/backtotop/BackToTop';
import {clothes} from './data'

function App() {
  return (
    <> 
      <Home clothes={clothes}/>
      <BackToTop />
    </>
  );
}

export default App;
