import { NextRequest, NextResponse } from "next/server";


export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
    const { name } = await req.json();
    const category = await prisma.category.update({ where: { id: params.id }, data: { name } });
    return NextResponse.json(category);
  }
  
export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
    await prisma.category.delete({ where: { id: params.id } });
    return NextResponse.json({ message: "Category deleted" });
}