import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Detail from './component/Detail';
import Home from './component/Home';
import Layout from './component/layout/Layout';

function App() {
  return (
    <div className="App">
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/detail/:id" element={<Layout><Detail/></Layout>}/>
      </Routes>
    </div>
  );
}

export default App;
