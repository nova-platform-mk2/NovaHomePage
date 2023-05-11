import './css/App.css';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import NotFound from './components/NotFound';
import SubRouter from './components/SubRouter';
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
