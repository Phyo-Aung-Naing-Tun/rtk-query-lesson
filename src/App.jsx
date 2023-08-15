import React from "react";
import { Route, Routes } from "react-router-dom";
import Product from "./components/product";
import Detail from "./components/Detail";
import EditForm from "./components/EditForm";
import AddForm from "./components/AddForm";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/editForm/:id" element={<EditForm />} />
        <Route path="/addForm" element={<AddForm />} />
      </Routes>
    </>
  );
};

export default App;
