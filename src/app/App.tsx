import style from './App.module.css';
import { Route, Routes } from 'react-router-dom';
import Header from '../widgets/header/header';
import UserPage from '../pages/userPage/ui/userPage';

function App() {
  return (
    <div className={style.app}>
      <Header />
      <Routes>
        <Route path={'/'} element={<UserPage />} />
      </Routes>
    </div>
  );
}

export default App;
