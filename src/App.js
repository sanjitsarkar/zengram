import { Route, Routes } from "react-router-dom";
import "./App.css";
import { MockAPI } from "./Pages/Index";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/mock" element={<MockAPI />} />
      </Routes>
    </div>
  );
}

export default App;
