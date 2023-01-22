import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./routes/Index";
import Login from "./routes/Login";
import Join from "./routes/Join";
import MemoList from "./routes/MemoList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/join" element={<Join/>}/>
        <Route path="/memoList" element={<MemoList/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
