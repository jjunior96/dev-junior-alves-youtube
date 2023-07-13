type Results = {
  name: { title: string; first: string; last: string };
  phone: string;
};

type Users = {
  results: Results[];
};

export const getUser = async (id: string) => {
  const data = await fetch('https://randomuser.me/api/' + id);
  return (await data.json()) as Users;
};

export const getUsers = async () => {
  // const data = await fetch('https://randomuser.me/api/');
  const data = await fetch('http://localhost:3000/api/users');

  return (await data.json()) as Users;
};
