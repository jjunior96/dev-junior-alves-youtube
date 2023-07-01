import { NextResponse } from 'next/server';

import { sleep } from '@/functions';

const user = {
  name: 'John Doe',
  role: 'admin',
  permissions: ['read', 'write']
};

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  await sleep(2000);

  const id = params.id;

  return NextResponse.json({
    id: +id,
    ...user
  });
}
