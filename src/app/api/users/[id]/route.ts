import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

const prisma = new PrismaClient();

export async function PUT(req: NextRequest, context: { params: { id: string } }) {
    try {
        const { id } = context.params;
        const { name, email } = await req.json();

        const user = await prisma.user.update({
            where: { id },
            data: { name, email },
        });

        return NextResponse.json(user, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: "Error updating user" }, { status: 500 });
    }
}
