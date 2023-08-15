import React from "react";
import { useParams } from "react-router-dom";
import { useOneblogQuery } from "../services/blogs";
import ProductCard from "./ProductCard";
import DetailCard from "./DetailCard";

const Detail = () => {
  const { id } = useParams();
  const { data: singleBlog } = useOneblogQuery(id);
  return (
    <div className=" flex  justify-center items-center h-screen">
      <DetailCard {...singleBlog} />
    </div>
  );
};

export default Detail;
