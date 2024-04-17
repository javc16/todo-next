import prisma from '@/lib/prisma';
import { NextResponse, NextRequest } from 'next/server'
import bcrypt from 'bcryptjs';

export async function GET(request: Request) { 

  await prisma.todo.deleteMany(); // delete * from todo
  await prisma.user.deleteMany(); // delete * from todo

  const user = await prisma.user.create({
    data: {
      email: 'test1@google.com',
      password: bcrypt.hashSync('123456'),
      roles: ['admin','client','super-user'],
      todos: {
        create: [
          { description: 'todo 1', complete: true },
          { description: 'todo 2' },
          { description: 'todo 3' },
          { description: 'todo 4' },
          { description: 'todo 5' },
        ]
      }
    }
  });
  

  return NextResponse.json({ message: 'Seed Executed' });
}