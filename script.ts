import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data: {
      name: "Jo1hn Doe",
      email: "l8h0ow@example.com",
      age: 30,
    },
  });
  console.log('user :', user)

  // const users = await prisma.user.findMany();
  // console.log("user :", users);
  
  // const users = await prisma.user.deleteMany();
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  })