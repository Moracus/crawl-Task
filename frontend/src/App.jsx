import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import AddBook from "./pages/AddBook";

const App = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-900">
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/add-book" element={<AddBook />}></Route>
        </Routes>
      </div>
    </>
  );
};

export default App;
