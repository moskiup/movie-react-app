import { MyRoutes } from '@/routers/routers';
import { Header } from '@components/header/Header';
import { BrowserRouter } from 'react-router-dom';

import './App.scss';
import 'swiper/css';

function App() {
  return (
    <>
      <BrowserRouter>
        <div id="app-container" className="container">
          <Header />
          <MyRoutes />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
