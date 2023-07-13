import { unstable_cache, revalidateTag } from 'next/cache';
import Link from 'next/link';

import { getUsers } from '@/services';

export default async function Users() {
  const cache = unstable_cache(getUsers, ['user']);

  const users = await cache();

  async function reset() {
    'use server';
    revalidateTag('user');
  }

  return (
    <>
      <h2>User</h2>

      {users.results.map((user) => (
        <p key={user.phone}>{user.name.first}</p>
      ))}
      <br />
      <Link href="/products">Go to Products</Link>

      <form action={reset}>
        <button onClick={reset} type="submit">
          RESET
        </button>
      </form>
    </>
  );
}
