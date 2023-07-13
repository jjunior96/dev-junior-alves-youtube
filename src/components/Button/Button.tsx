export const Button = ({
  handleAddCounter
}: {
  handleAddCounter: () => void;
}) => {
  return <button onClick={handleAddCounter}>Add counter</button>;
};
