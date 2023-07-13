import { NextRequest, NextResponse } from 'next/server';

type Results = {
  name: { title: string; first: string; last: string };
  phone: string;
};

type Users = {
  results: Results[];
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(request: NextRequest) {
  // await sleep(2000);
  // const tag = request.nextUrl.searchParams.get('tag');

  const data = await fetch('https://randomuser.me/api/');
  const users = (await data.json()) as Users;

  return NextResponse.json(users);
}
