import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../lib/prisma";


export async function GET() {
    const productEnquiry =  await prisma.productEnquiry.findMany();
    return NextResponse.json(productEnquiry);
}

export async function POST(req: NextRequest) {
    const data = await req.json();
    const enquiry = await prisma.productEnquiry.create({ data });
    return NextResponse.json(enquiry, { status: 201 });
}
  