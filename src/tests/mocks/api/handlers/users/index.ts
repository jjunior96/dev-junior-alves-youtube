import { rest } from 'msw';

export const usersHandler = [
  rest.get(`${process.env.NEXT_PUBLIC_API_URL}/users`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: 1,
          name: 'John Doe',
          email: 'jvYQn@example.com'
        }
      ])
    );
  })
];
