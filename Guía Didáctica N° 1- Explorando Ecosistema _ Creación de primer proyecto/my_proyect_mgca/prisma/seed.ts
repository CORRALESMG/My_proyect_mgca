import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  const tenant = await prisma.tenant.create({
    data: { name: 'Empresa Demo' },
  });

  await prisma.user.create({
    data: {
      email: 'admin@demo.com',
      name: 'Admin',
      password: await bcrypt.hash('123456', 10),
      role: 'ADMIN',
      tenantId: tenant.id,
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());