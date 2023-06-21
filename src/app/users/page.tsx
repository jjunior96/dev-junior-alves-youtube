'use client';

import { useUserContext } from '@/context/users';

export default function UsersPage() {
  const users = useUserContext();

  console.log(users);

  return <div>Users</div>;
}
