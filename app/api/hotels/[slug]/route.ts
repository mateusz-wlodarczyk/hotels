import {
  GetHotelsQuery,
  GetSingleHotelQuery,
  getClient,
} from "@/app/src/graphql";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const { data: hotel } = await getClient().query({
    query: GetSingleHotelQuery,
    variables: { slug: params.slug },
  });

  return NextResponse.json({ hotel });
}

// /api/hotels/
// klika zakup
// leci do ERP z id zamówienia albo z listą produktów
// idzie do ERP/banku
// kupiony -> bank wysyła POST z notyfikacją success
// zapis do bazy że zakupiony

// /order/[id]/success
