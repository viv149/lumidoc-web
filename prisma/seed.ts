const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcrypt");

const prisma = new PrismaClient();

// async function main() {
//     const hashedPassword = await bcrypt.hash("admin123", 10);

//     await prisma.user.upsert({
//         where: { email: "admin@example.com" },
//         update: {},
//         create: {
//             name: "Admin User",
//             email: "admin@example.com",
//             password: hashedPassword,
//             role: "ADMIN",
//         },
//     });

//     console.log("✅ Admin user seeded successfully!");
// }

async function main() {
    const hashedPassword = await bcrypt.hash("vivek123", 10);

    await prisma.user.upsert({
        where: { email: "viveksharma14091994@gmail.com" },
        update: {},
        create: {
            name: "Vivek Sharma",
            email: "viveksharma14091994@gmail.com",
            password: hashedPassword,
            role: "USER",
        },
    });

    console.log("✅ User seeded successfully!");
}

main()
    .catch((error) => {
        console.error("❌ Error seeding admin user:", error);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
