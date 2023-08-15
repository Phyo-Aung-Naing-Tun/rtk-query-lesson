import React from "react";
import ProductCard from "./ProductCard";
import { useBlogsQuery } from "../services/blogs";
import { Button } from "@mantine/core";
import { Link } from "react-router-dom";

const product = () => {
  const { data: blogs } = useBlogsQuery();
  return (
    <>
      <div>
        <Link to="/addForm">
          <Button className=" bg-purple-600 mt-5 ms-5">Add Cards</Button>
        </Link>
      </div>
      <div className=" flex justify-center  flex-wrap gap-10 my-10">
        {blogs?.map((blog) => (
          <ProductCard key={blog.id} {...blog} />
        ))}
      </div>
    </>
  );
};

export default product;
