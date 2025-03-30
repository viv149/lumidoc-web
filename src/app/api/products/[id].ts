import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../lib/prisma";


// PATCH & DELETE product by ID
export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
    const data = await req.json();
    const updatedProduct = await prisma.product.update({ where: { id: params.id }, data });
    return NextResponse.json(updatedProduct);
}
  
export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
    await prisma.product.delete({ where: { id: params.id } });
    return NextResponse.json({ message: "Product deleted" });
}
  