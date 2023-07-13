'use client';

import { useEffect, useMemo, useState } from 'react';

import { Modal, Table } from '.';

export const Big = () => {
  const [data, setData] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [search, setSearch] = useState('');

  const columns = useMemo(() => {
    [
      {
        title: 'First Name',
        dataIndex: 'first',
        key: 'first'
      }
    ];
  }, []);

  const handleToggle = () => {
    setToggle((prev) => !prev);
  };

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const res = await fetch('https://randomuser.me/api/');
      const data = await res.json();
      setData(data);
    } catch (error) {
      setIsError(true);
      if (error instanceof Error) {
        setErrorMessage(error.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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

      <div>
        <form>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>

        <div>
          <button onClick={handleToggle}>Open Modal</button>
        </div>
      </div>

      {isError ? (
        <Modal isOpen={toggle} onClose={handleToggle}>
          <p>{errorMessage}</p>
        </Modal>
      ) : (
        <Modal isOpen={toggle} onClose={handleToggle}>
          <div>Conteúdo modal</div>
        </Modal>
      )}

      {isLoading ? (
        <p>Carregando...</p>
      ) : (
        <Table data={data} columns={columns} />
      )}

      {/* Ao infinito e além... */}
    </>
  );
};
