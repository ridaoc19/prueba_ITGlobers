import { Route, Routes } from 'react-router-dom';
import Detail from './component/Detail';
import Home from './component/Home';
import Layout from './component/layout/Layout';
import Presentation from './component/presentation/Presentation';

function App() {
  return (
    <div>
       <Routes>
        <Route path="/" element={<Presentation/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/detail/:id" element={<Layout><Detail/></Layout>}/>
      </Routes>
    </div>
  );
}

export default App;
