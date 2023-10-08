import { AutoList } from './AutoList';
import { NotFound } from './NotFound';
import { FavoriteList } from './FavoriteList';
import { MainPage } from './MainPage';
import { Header } from './Header';
import { Routes, Route } from 'react-router-dom';

export const App = () => {
  return (
    <div
      style={
        {
          // paddingLeft: 118,
          // paddingRight: 118,
        }
      }
    >
      <Header></Header>
      <Routes>
        <Route path="/" element={<MainPage></MainPage>} />
        <Route path="/catalog" element={<AutoList></AutoList>} />
        <Route path="/favorites" element={<FavoriteList></FavoriteList>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
