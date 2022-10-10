import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./routes/Login";
import Join from "./routes/Join";
import MemoList from "./routes/MemoList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/join" element={<Join/>}/>
        <Route path="/memoList" element={<MemoList/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
