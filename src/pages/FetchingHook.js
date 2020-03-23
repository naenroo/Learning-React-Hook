import React, { useState, useEffect, Suspense } from 'react';
import axios from 'axios';

import { fetchDataSuspense } from '../API/Service';
import LoadingSpinner from '../utils/LoadingSpinner';

const resource = fetchDataSuspense();

const FetchingHook = () => {
  const [loadedDatas, setLoadedDatas] = useState([]);
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchDataHook();

    // eslint-disable-next-line
  }, []);

  const fetchDataHook = async () => {
    try {
      const response = await axios.get(
        `http://hn.algolia.com/api/v1/search?query=${search}`
      );
      setLoadedDatas(response.data.hits);
    } catch (error) {
      alert(error);
      console.error(error, 'Failed Fetching Data from API...!');
    }

    setIsLoading(false);
  };

  const handleSearch = event => {
    event.preventDefault();

    fetchDataHook();
  };

  const posts = resource.posts.read();
  console.log(posts);
  return (
    <>
      <div style={{ marginLeft: '80px', marginTop: '50px' }}>
        <h3>React Hook - Fetching Data API (using react Hook)</h3>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            onChange={event => setSearch(event.target.value)}
          />
          <button type="submit">Search</button>
          <ol>
            {isLoading ? (
              <LoadingSpinner asOverlay />
            ) : (
              loadedDatas.map(loadedData => (
                <li key={loadedData.objectID}>
                  <h6>{loadedData.created_at}</h6>
                  <a href={loadedData.url}>{loadedData.title}</a>
                </li>
              ))
            )}
          </ol>
        </form>
      </div>

      <hr />

      <div
        style={{
          display: 'grid',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Suspense fallback={<LoadingSpinner />}>
          <h1>Fetching Data using React Suspense</h1>
          <ol>
            {posts.map(post => (
              <li key={post.id}>
                <h3>{post.title}</h3>
                <h6>{post.body}</h6>
              </li>
            ))}
          </ol>
        </Suspense>
      </div>
    </>
  );
};

export default FetchingHook;
