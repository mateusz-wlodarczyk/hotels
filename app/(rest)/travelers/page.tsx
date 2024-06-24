import Image from "next/image";
import React from "react";
import { DataType } from "@/utils/fetchTypes";
import { getTravelers } from "@/utils/fetchTravelers";
import Link from "next/link";
const URL = "https://jsonplaceholder.typicode.com/users";
export default async function TravelersPage() {
  const data: DataType[] = await getTravelers(URL);
  return (
    <>
      <Image
        src={"/images/photo_2.JPG"}
        alt="random"
        width={400}
        height={400}
      />

      {data !== undefined &&
        data.map((el) => (
          <Link href={`travelers/${el.id}`} key={el.id}>
            {el.name}
          </Link>
        ))}
    </>
  );
}
