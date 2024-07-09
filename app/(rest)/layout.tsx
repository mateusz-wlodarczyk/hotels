import MainNavbar from "./components/MainNavbar";
import { SignIn } from "./components/SignIn";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <MainNavbar signInComponent={<SignIn />} />
      {/* <ApolloWrapper>{children}</ApolloWrapper> */}
      {children}
    </>
  );
}
