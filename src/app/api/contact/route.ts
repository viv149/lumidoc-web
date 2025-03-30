import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../lib/prisma";



export async function GET(){
    const contactMessage =  await prisma.contactMessage.findMany();
    return NextResponse.json(contactMessage);
}

export async function POST(req: NextRequest) {
    const data = await req.json();
    const message = await prisma.contactMessage.create({ data });
    return NextResponse.json(message, { status: 201 });
}
  