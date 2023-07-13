import { unstable_cache } from 'next/cache';
import Link from 'next/link';

import { getUsers } from '@/services';

export default async function Products() {
  const cache = unstable_cache(getUsers, ['user', 'products']);

  const users = await cache();

  return (
    <>
      <h2>Products</h2>

      {users.results.map((user) => (
        <p key={user.phone}>{user.name.first}</p>
      ))}
      <br />

      <Link href="/users">Go to Users</Link>
    </>
  );
}
