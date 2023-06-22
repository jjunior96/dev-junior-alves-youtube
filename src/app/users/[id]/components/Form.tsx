'use client';

// import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { sleep } from '@/functions';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { User } from '@/models';

import { Input } from './Input';

type FormProps = {
  user?: User;
  id?: string;
};

const schema = z
  .object({
    id: z.string().min(1, 'Id is required'),
    name: z.string().min(1, 'Name is required')
  })
  .transform((data) => ({
    id: data.id.toString(),
    name: data.name
  }));

type FormValues = z.infer<typeof schema>;

const handleAddUser = async (data: FormValues) => {
  await sleep(2000);

  console.log('ADD', data);
};

const handleUpdateUser = async (data: FormValues) => {
  await sleep(2000);

  console.log('UPDATE', data);
};

export const Form = ({ user, id = '' }: FormProps) => {
  const {
    handleSubmit,
    register,
    // setValue,
    formState: { errors, isSubmitting }
  } = useForm<FormValues>({
    mode: 'onBlur',
    defaultValues: {
      id: id ? user?.id : '',
      name: id ? user?.name : ''
    },
    resolver: zodResolver(schema)
  });

  // Alternativa para setar os valores default
  // useEffect(() => {
  //   setValue('id', user.id);
  //   setValue('name', user.name);
  // }, [setValue, user.id, user.name]);

  const handleSubmitForm = async (data: FormValues) => {
    if (id) {
      await handleUpdateUser(data);

      return;
    }

    await handleAddUser(data);
  };

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <h2 className="mb-6 text-2xl font-bold text-slate-200">Form</h2>

      <form
        className="flex w-full max-w-md flex-col items-center gap-3"
        onSubmit={handleSubmit(handleSubmitForm)}
      >
        <Input
          placeholder="User Id"
          {...register('id', { setValueAs: (v) => v.toString() })}
          helperText={errors?.id?.message}
        />
        <Input
          placeholder="Name"
          {...register('name')}
          helperText={errors?.name?.message}
        />

        <button
          type="submit"
          className={`mt-4 w-full rounded-md border-[4px] border-none bg-blue-500 py-3 text-gray-50 duration-200 ease-in-out hover:bg-blue-700 ${
            isSubmitting && 'bg-blue-900'
          }`}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Saving...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};
