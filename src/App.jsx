import { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import { AddBooks } from "./AddBooks.jsx";
import { Books } from "./Books";
import { EditBook } from "./EditBook.jsx";
import { Takebooks } from "./Takebooks.jsx";
import { Navbar } from "./Navbar.jsx";
import Footer from "./Footer";
import Home from "./Home";

function App() {
  const navigate = useNavigate();
  const [takebooks, settakebooks] = useState([]);

  console.log("takebooks", takebooks);
  const returndeletfun = async (dataid) => {
    // const api =`https://63e0923b65b57fe60644f2ba.mockapi.io/books/${dataid}`

    await fetch(`https://63e0923b65b57fe60644f2ba.mockapi.io/books/${dataid}`, {
      method: "DELETE",
    });
    navigate(`/books/take`);
  };

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/books" element={<Books />} />
        <Route path="/addbooks" element={<AddBooks />} />
        <Route path="/books/edit/:id" element={<EditBook />} />
        <Route
          path="/books/take"
          element={<Takebooks takebooks={takebooks} />}
        />
        <Route path="*" element={<Books />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
