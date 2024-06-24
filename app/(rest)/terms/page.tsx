import React from "react";

import { NEXT_PUBLIC_NAME } from "../../(config)/zod";

const name = process.env.NEXT_PUBLIC_NAME;

// const envVariables = NEXT_PUBLIC_NAME.object({
//   name: NEXT_PUBLIC_NAME.string(),
// });

// export const projectEnvs = envVariables.parse(process.env);

// declare global {
//   namespace NodeJs {
//     interface ProcessEnv extends projectEnvs.infer<typeof envVariables> {}
//   }
// }

export default function TermsPage() {
  return <div>TermsPage {name}</div>;
}
