import { getBlogs } from "@/utils/fetchBlogs";
import { DataType } from "@/utils/fetchTypes";
import Link from "next/link";
import React from "react";
import { getPostsFileNames } from "./[slug]/helpers";
export default async function BlogPage() {
  const fileNames = getPostsFileNames();
  return (
    <div>
      {fileNames.map((el) => (
        <Link href={`blog/${el}`} key={el}>
          {el}
        </Link>
      ))}
    </div>
  );
}
