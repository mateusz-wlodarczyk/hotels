import { DataType } from "@/utils/fetchTypes";
import React from "react";
import { getPost, getPostsFileNames } from "./helpers";
import { notFound } from "next/navigation";
import { MdxContent } from "@/src/gql/MdxContent";

export default async function SingleBlogPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPost(params.slug);
  if (!post) {
    return notFound();
  }
  return <MdxContent source={post.serialized} />;
}

export async function generateStaticParams() {
  const fileNames = getPostsFileNames();
  return fileNames.map((post) => ({
    slug: post,
  }));
}
