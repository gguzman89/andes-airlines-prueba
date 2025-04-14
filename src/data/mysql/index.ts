import { PrismaClient as Airplane } from '../../../prisma/generated/';






export const airplane = new Airplane({
  log: ['query', 'info', 'warn', 'error']
});


