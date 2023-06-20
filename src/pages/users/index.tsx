type UserProps = {
  id: number;
  name: string;
};

export default function UsersPage({ users }: { users: UserProps[] }) {
  console.log(users);

  return (
    <>
      <h2>{users[0].name}</h2>
    </>
  );
}

export const getServerSideProps = async () => {
  const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`);
  const result: UserProps[] = await data.json();

  return {
    props: {
      users: result
    }
  };
};
