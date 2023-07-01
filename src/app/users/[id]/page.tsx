import { User } from '@/models';

import { Form } from './components/Form';

const getUser = async (id: string) => {
  const data = await fetch(`http://localhost:3000/api/users/${id}`);
  return (await data.json()) as User;
};

export default async function User({ params }: { params: { id: string } }) {
  const user = await getUser(params.id);

  console.log({ user });

  return (
    <>
      <h2>User</h2>

      <Form user={user} id={user.id} />
    </>
  );
}
