import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../lib/prisma";

export async function GET(){
    const blogs =  await prisma.blog.findMany();
    return NextResponse.json(blogs);
}

export async function POST(req: NextRequest) {
    const { title, content, seoTitle, seoDescription } = await req.json();
    const newBlog = await prisma.blog.create({ data: { title, content, seoTitle, seoDescription } });
    return NextResponse.json(newBlog, { status: 201 });

}