import { Menu } from 'components/Menu/Menu';
import { Cardapio } from 'pages/Cardapio/Cardapio';
import { Inicio } from 'pages/Inicio/Inicio';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const AppRouter = () => {

  return(
    <Router>
      <Menu/>
      <Routes>
        <Route path='/' element={<Inicio/>}/>
        <Route path='/cardapio' element={<Cardapio/>}/>
      </Routes>
    </Router>
  );

}

export default AppRouter;