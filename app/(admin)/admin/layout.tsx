import type { Metadata } from "next";
import { getSession } from "next-auth/react";

export default async function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const session=await getSession()
  // if(!session || session.user.role!=="admin"){
  //   redirect()
  // }
  return (
    <>
      <p>panel administracyjny</p>
      {children}
    </>
  );
}
