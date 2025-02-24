import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

// Avoid multiple instances of PrismaClient in Next.js dev mode
const globalForPrisma = globalThis;
globalForPrisma.prisma = globalForPrisma.prisma || new PrismaClient();
const prisma = globalForPrisma.prisma;

export async function POST(req: Request) {
    try {
        const { name, email, message } = await req.json();

        if (!name || !email || !message) {
            return NextResponse.json({ error: "All fields are required" }, { status: 400 });
        }

        // Check if email already exists
        const existingQuery = await prisma.query.findUnique({ where: { email } });

        if (existingQuery) {
            return NextResponse.json({ error: "Email already exists" }, { status: 400 });
        }

        // Create new query
        const newQuery = await prisma.query.create({
            data: { name, email, message },
        });

        return NextResponse.json({ newQuery, message: "Query sent successfully" }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
    }
}
