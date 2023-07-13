import { ChangeEvent, useEffect, useMemo, useState } from 'react';

export const useBig = () => {
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

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
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

  return {
    data,
    toggle,
    search,
    isLoading,
    isError,
    errorMessage,
    columns,
    handleToggle,
    handleSearch
  };
};
