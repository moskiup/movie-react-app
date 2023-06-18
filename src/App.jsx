import { MyRoutes } from './routers/routers';
import { Header } from './components/header/Header';
import { BrowserRouter } from 'react-router-dom';
import { Loader } from './components/loader/Loader';

import './App.scss';
import 'swiper/css';

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="container">
          <Header />
          <MyRoutes />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
