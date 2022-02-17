import { BrowserRouter,Routes,Route } from "react-router-dom";
import Index from './views/Index'
import './index.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
