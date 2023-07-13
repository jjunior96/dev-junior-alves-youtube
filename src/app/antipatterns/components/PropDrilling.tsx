import { useCounterContext } from '@/context';

const Counter = () => {
  const { counter } = useCounterContext();

  return (
    <>
      <h2>Content</h2>

      <p>Counter: {counter}</p>
    </>
  );
};

const Content = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>Home</li>
            <li>Users</li>
            <li>Products</li>
            <li>About</li>
          </ul>
        </nav>
      </header>

      {/* Outros componentes... */}

      <Counter />
    </>
  );
};

export const Container = () => {
  const { handleIncreaseCounter, handleDecreaseCounter } = useCounterContext();

  return (
    <>
      <h2>Prop drilling</h2>

      <button onClick={handleIncreaseCounter}>Increase counter</button>
      <button onClick={handleDecreaseCounter}>Decrease counter</button>

      <Content />
    </>
  );
};
