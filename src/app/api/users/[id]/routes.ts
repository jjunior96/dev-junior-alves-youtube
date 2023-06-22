import { NextResponse } from 'next/server';

function sleep(time: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}

export async function GET(request: Request, params: { id: string }) {
  await sleep(2000);

  const slug = params.id;

  console.log({ slug });

  return NextResponse.json(
    {
      id: 1,
      name: 'John Doe'
    },
    {
      status: 200
    }
  );
}
