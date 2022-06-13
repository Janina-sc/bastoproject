import './App.css';
import {Routes, Route} from 'react-router-dom';
import Navigation from './components/Navigation';
import CattleList from './components/CattleList';
import CreateCattle from './components/CreateCattle';

function App() {
  return (
    <div className="">
      <Navigation/>
      <div className='contaier p-4'>
        <Routes>
          <Route path='/' element={<CattleList/>}/>
          <Route path='/createCattle' element={<CreateCattle/>}/>
          <Route path='/edit/:id' element={<CreateCattle/>}/>
        </Routes>

      </div> 
    </div>
  );
}

export default App;