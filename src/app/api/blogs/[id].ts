import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../lib/prisma";


export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
    const { title, content, seoTitle, seoDescription } = await req.json();
    const updatedBlog = await prisma.blog.update({ where: { id: params.id }, data: { title, content, seoTitle, seoDescription } });
    return NextResponse.json(updatedBlog);
  }
  
export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
    await prisma.blog.delete({ where: { id: params.id } });
    return NextResponse.json({ message: "Blog deleted" });
}