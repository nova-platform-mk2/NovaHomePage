import './css/App.css';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import NotFound from './Component/NotFound';
import SubRouter from './Component/SubRouter';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/nova/*" element={<SubRouter/>}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
