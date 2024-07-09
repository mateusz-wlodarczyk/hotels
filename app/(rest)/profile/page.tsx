// "use client";
// import { getProfiles } from "@/utils/fetchProfiles";
// import { DataType } from "@/utils/fetchTypes";
// import React, { useEffect, useState } from "react";
// const URL = "https://jsonplaceholder.typicode.com/users";

import { auth } from "@/app/auth";
import { redirect } from "next/navigation";

// export default function ProfilePage() {
//   const [data, setData] = useState<DataType[] | null>();

//   useEffect(() => {
//     getProfiles(URL).then((data) => setData(data));

//     console.log("data", data);
//   }, []);
//   return (
//     <>
//       <p>PROFILES: </p>
//       <ul>{!!data && data.map((el) => <li key={el.id}>{el.name}</li>)}</ul>
//     </>
//   );
// }

export default async function ProfilePage() {
  const session = await auth();

  if (!session) {
    redirect("/");
  }

  return <p>{JSON.stringify(session)}</p>;
}
