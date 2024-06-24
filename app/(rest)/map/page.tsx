import { GoogleMapsEmbed, GoogleTagManager } from "@next/third-parties/google";
import React from "react";

export default function MapPage() {
  return (
    <GoogleMapsEmbed
      apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP as string}
      height={600}
      width="100%"
      mode="place"
      q="Katowice"
    />
  );
}
