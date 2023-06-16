import { MyRoutes } from './routers/routers';
import { Header } from './components/header/Header';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import 'swiper/css';

import { Loader } from './components/loader/Loader';

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
