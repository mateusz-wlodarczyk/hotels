import { GetHotelsQuery, getClient } from "@/app/src/graphql";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { data: hotels } = await getClient().query({ query: GetHotelsQuery });

  return NextResponse.json({ hotels });
}

// klika zakup
// leci do ERP z id zamówienia albo z listą produktów
// idzie do ERP/banku
// kupiony -> bank wysyła POST z notyfikacją success
// zapis do bazy że zakupiony

// /order/[id]/success
