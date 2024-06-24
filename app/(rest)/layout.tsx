import MainNavbar from "./components/MainNavbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <MainNavbar />
      {/* <ApolloWrapper>{children}</ApolloWrapper> */}
      {children}
    </>
  );
}
