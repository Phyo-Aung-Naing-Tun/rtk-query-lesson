import { Button } from "@mantine/core";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAddProductMutation } from "../services/blogs";

const AddForm = () => {
  const [name, setName] = useState();
  const [catagorie, setCatagorie] = useState();
  const [image, setImage] = useState();
  const nav = useNavigate();

  const [addProduct] = useAddProductMutation();

  const submitHundaller = (e) => {
    e.preventDefault();
    const addData = { id: Date.now(), name, catagorie, image };
    addProduct(addData);
    nav("/");
  };
  return (
    <div>
      <div className=" bg-gray-200 flex justify-center items-center h-screen">
        <form
          onSubmit={submitHundaller}
          className=" py-5 flex rounded-lg flex-col bg-white items-center gap-5 w-[400px] shadow-lg"
        >
          <h1 className="text-center text-purple-500 font-bold text-xl tracking-wider">
            Add Product Cards
          </h1>

          <input
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            required
            value={name}
            type="text"
            className=" w-[70%]  h-[30px] outline-none border-b border-solid border-blue-700 px-2 py-2 p"
          />
          <input
            onChange={(e) => setCatagorie(e.target.value)}
            placeholder="Catagorie"
            value={catagorie}
            required
            type="text"
            className=" w-[70%]  h-[30px] outline-none border-b border-solid border-blue-700 px-2 py-2 p"
          />
          <input
            onChange={(e) => setImage(e.target.value)}
            placeholder="Image url"
            required
            value={image}
            type="text"
            className=" w-[70%]  h-[30px] outline-none border-b border-solid border-blue-700 px-2 py-2 p"
          />
          <div className=" flex gap-6 w-[70%]">
            <Button
              type="submit"
              variant="light"
              className=" bg-blue-400 text-white"
            >
              Add
            </Button>
            <Link to={`/`}>
              <Button
                className=" bg-purple-600 text-white"
                variant="light"
                color="grape"
              >
                Back
              </Button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddForm;
