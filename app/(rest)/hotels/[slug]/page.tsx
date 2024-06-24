import {
  GetHotelsQuery,
  GetReviewsQuery,
  GetSingleHotelQuery,
  GetSingleReviewQuery,
  getClient,
} from "@/app/src/graphql";
import { data } from "@/lib/hotels";
import React from "react";
import AddReview from "../../components/AddReview";
import { Metadata, ResolvingMetadata } from "next";
import { revalidatePath } from "next/cache";

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function HotelPageDetail({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  const { data: hotel } = await getClient().query({
    query: GetSingleHotelQuery,
    variables: { slug: slug },
  });
  // const { data: review } = await getClient().query({
  //   query: GetReviewsQuery,
  // });

  const { data: review } = await getClient().query({
    query: GetSingleReviewQuery,
    variables: { name: slug },
  });

  // console.log("single review", review);
  const onAddReviewAction = async () => {
    "use server";
    //wyslanie do hygraph
    revalidatePath("/hotels/[slug]");
  };

  return (
    <div>
      <p>{hotel.categoriesConnection.edges[0].node.name}</p>
      <AddReview slug={slug} action={onAddReviewAction} />
    </div>
  );
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent?: ResolvingMetadata
): Promise<Metadata> {
  const slug = params.slug;

  // fetch data
  const { data: hotel } = await getClient().query({
    query: GetSingleHotelQuery,
    variables: { slug: slug },
  });

  return {
    title: hotel.title || "empty",
    description: hotel.description || "empty",
  };
}
