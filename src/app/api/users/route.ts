import { NextResponse } from 'next/server';

import { sleep } from '@/functions';

export async function GET(request: Request) {
  await sleep(2000);

  console.log(request);

  return NextResponse.json({ id: 1, name: 'John Doe' });

  // return NextResponse.json(
  //   {
  //     id: 1,
  //     name: 'John Doe'
  //   },
  //   {
  //     status: 200
  //   }
  // );
}
