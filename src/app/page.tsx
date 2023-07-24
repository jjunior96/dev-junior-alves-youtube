import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

async function createUser(formData: FormData) {
  'use server';

  const values = Object.fromEntries(formData.entries());

  const schema = z.object({
    name: z.string().min(1, 'Name is required'),
    email: z.string().email().min(1, 'Email is required')
  });

  const data = schema.parse(values);
  console.log(data);
}

export default function HomePage() {
  return (
    <div className="flex w-full flex-col justify-center pb-8">
      <h2 className="text-3xl font-bold text-gray-50">Awesome Forms!</h2>

      <form action={createUser} className="mt-8 flex flex-col gap-3">
        <Input name="name" placeholder="Name" />
        <Input name="email" placeholder="Email" />

        <Button type="submit" className="mt-3">
          Submit
        </Button>
      </form>
    </div>
  );
}
