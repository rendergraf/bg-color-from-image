import React, { lazy, Suspense, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Spinner from '../components/Spinner';
import Layout from '../layout';

const Home = lazy(() => import('../components/pages/Home'));
const Error = lazy(() => import('../components/pages/Error'));

// eslint-disable-next-line react/prop-types
const LazyComponent = ({ component: Component, ...rest }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <Suspense fallback={<Spinner isLoaded={isLoaded} />}>
      <Component {...rest} onLoad={() => setIsLoaded(true)} />
    </Suspense>
  );
};

const Root = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<LazyComponent component={Home} />} />
        <Route
          path="*"
          element={<LazyComponent component={Error} />}
          status={404}
        />
      </Route>
    </Routes>
  );
};

export default Root;
