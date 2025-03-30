import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../lib/prisma";



// GET all products & POST a new product
export async function GET() {
    const products = await prisma.product.findMany();
    return NextResponse.json(products);
}
  
export async function POST(req: NextRequest) {
    const data = await req.json();
    const newProduct = await prisma.product.create({ data });
    return NextResponse.json(newProduct, { status: 201 });
}
  