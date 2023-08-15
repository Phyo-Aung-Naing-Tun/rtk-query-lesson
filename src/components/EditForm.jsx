import { Button } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEditProductMutation, useOneblogQuery } from "../services/blogs";

const EditForm = () => {
  const { id } = useParams();
  const { data: singleBlog } = useOneblogQuery(id);
  const [editProduct] = useEditProductMutation();

  const [name, setName] = useState();
  const [catagorie, setCatagorie] = useState();
  const [image, setImage] = useState();
  const nav = useNavigate();

  useEffect(() => {
    setName(singleBlog.name);
    setCatagorie(singleBlog.catagorie);
    setImage(singleBlog.image);
  }, []);
  const submitHundaller = (e) => {
    e.preventDefault();
    const updateData = { id, name, catagorie, image };
    editProduct(updateData);
    nav("/");
  };
  return (
    <div className=" bg-gray-200 flex justify-center items-center h-screen">
      <form
        onSubmit={submitHundaller}
        className=" py-5 flex rounded-lg flex-col bg-white items-center gap-5 w-[400px] shadow-lg"
      >
        <h1 className="text-center text-purple-500 font-bold text-xl tracking-wider">
          Edit Product
        </h1>

        <input
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          defaultValue={name}
          type="text"
          className=" w-[70%]  h-[30px] outline-none border-b border-solid border-blue-700 px-2 py-2 p"
        />
        <input
          onChange={(e) => setCatagorie(e.target.value)}
          placeholder="Catagorie"
          defaultValue={catagorie}
          type="text"
          className=" w-[70%]  h-[30px] outline-none border-b border-solid border-blue-700 px-2 py-2 p"
        />
        <input
          onChange={(e) => setImage(e.target.value)}
          placeholder="Image url"
          defaultValue={image}
          type="text"
          className=" w-[70%]  h-[30px] outline-none border-b border-solid border-blue-700 px-2 py-2 p"
        />
        <div className=" flex gap-6 w-[70%]">
          <Button
            type="submit"
            variant="light"
            className=" bg-blue-400 text-white"
          >
            Done
          </Button>
          <Link to={`/detail/${id}`}>
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
  );
};

export default EditForm;
