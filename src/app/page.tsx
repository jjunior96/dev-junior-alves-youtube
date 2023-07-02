import { Controlled } from '@/components/Inputs/Controlled';
import { Uncontrolled } from '@/components/Inputs/Uncontrolled';

export default async function HomePage() {
  return (
    <>
      <div className="flex w-full justify-center pb-8">Home</div>

      <h2>Uncontrolled</h2>

      <Uncontrolled />

      <h2>Controlled</h2>

      <Controlled />
    </>
  );
}
