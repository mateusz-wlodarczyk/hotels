"use client";

import { MDXRemote, type MDXRemoteSerializeResult } from "next-mdx-remote";

type MdxContentProps = {
  source: MDXRemoteSerializeResult;
};
type MDXProps = { children: React.ReactNode };

const MdxComponents = {
  a: ({ children, href }: MDXProps & { href: string }) => (
    <a href={href}>{children}</a>
  ),
  h1: ({ children }: MDXProps) => <h1>{children}</h1>,
  p: ({ children }: MDXProps) => <p>{children}</p>,
  ul: ({ children }: MDXProps) => <p>{children}</p>,
};

export function MdxContent({ source }: MdxContentProps) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  return <MDXRemote {...source} components={MdxComponents} />;
}
