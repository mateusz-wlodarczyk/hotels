import type { Metadata } from "next";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <p>panel administracyjny</p>
      {children}
    </>
  );
}
