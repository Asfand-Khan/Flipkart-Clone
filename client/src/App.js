import Header from "./components/header/Header";
import Home from "./components/home/Home";
import { Routes, Route } from "react-router-dom";
import DetailView from "./components/detailView/DetailView";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<DetailView />} />
      </Routes>
    </div>
  );
}

export default App;
