import { Box, Button, Container, TextField, Typography } from '@mui/material';

type PostProps = {
  id: number;
  title: string;
  body: string;
};

export default async function HomePage() {
  const data = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  const post = (await data.json()) as PostProps;
  console.log(post);

  return (
    <Container>
      <Typography variant="h1">Hello World</Typography>
      <Typography variant="h4">{post.title}</Typography>

      <Box
        display={'flex'}
        alignContent={'center'}
        flexDirection={'column'}
        gap={2}
        marginTop={5}
      >
        <TextField label="Name" size="small" />
        <TextField label="Document" size="small" />
        <TextField label="Email" size="small" />

        <Button variant="contained" size="large" sx={{ marginTop: 2 }}>
          Button
        </Button>
      </Box>
    </Container>
  );
}
