import { GetHotelsQuery, GetReviewsQuery, getClient } from "@/app/src/graphql";
import { data as datadata } from "@/lib/hotels";
import { GetHotelsDocument } from "@/src/gql/graphql";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";
export const metadata: Metadata = {
  title: "next app hotels",
  description: "hotels description",
};

export default async function HotelsPage() {
  const { data: hotels } = await getClient().query({ query: GetHotelsQuery });
  const { data: review } = await getClient().query({ query: GetReviewsQuery });
  // console.log(review.reviewsConnection.edges.product);
  return (
    <div>
      <p>hotels page</p>
      <br />
      {hotels.categoriesConnection.edges.map((el) => {
        console.log(el.node);
        return (
          <div key={el.node.id}>
            <Link href={`hotels/${el.node.slug}`}>{el.node.name}</Link>
          </div>
        );
      })}
      <br />
      <br />

      {review.reviewsConnection.edges.map((el) => {
        console.log("ok1", el.node.produc);
        return (
          <div key={el.node.id}>
            {/* <p>{el.node.product.name}</p> */}
            <p>{el.node.content}</p>
            <p>{el.node.rating}</p>
            {/* <p>{el.node.product[0].name}</p> */}
          </div>
        );
      })}
    </div>
  );
}
