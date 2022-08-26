import Home from './component/page/home/Home';
import BackToTop from './component/common/backtotop/BackToTop';
import {clothes} from './data'
import React, { }  from 'react';
function App() {
  return (
    <> 
      <Home clothes={clothes}/>
      <BackToTop />
    </>
  );
}

export default App;
