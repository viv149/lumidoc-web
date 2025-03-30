import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../lib/prisma";


export async function GET(){
    try {
        const categories = await prisma.category.findMany();
        return NextResponse.json({ 
            "data": categories, 
            "message": "Fetch category successfully!"
        }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch categories" }, { status: 500 });
    }
}

export async function POST(req: NextRequest) {
    try {
        const { name } = await req.json();

        if (!name) {
            return NextResponse.json({ error: "Category name is required" }, { status: 400 });
        }

        const category = await prisma.category.create({
            data: { name },
        });

        return NextResponse.json({
            data: category,
            message: "Category created successfully!"
        },{ status: 201 });
    } catch (error) {
        return NextResponse.json({ error: "Failed to create category" }, { status: 500 });
    }
}