import React, { useState, useContext, useReducer, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { useCallback } from 'react';
import { AuthContext } from './context/Auth';

import TodosContext from './context/todo/TodosContext';
import TodosReducer from './context/todo/TodosReducer';

import Navbar from './layout/Navbar';
import NotFound from './pages/NotFound';
import LoadingSpinner from './utils/LoadingSpinner';

const Home = lazy(() => {
  return import('./pages/Home');
});

const Fundamental = lazy(() => {
  return import('./pages/Fundamental');
});

const FormHook = lazy(() => {
  return import('./pages/FormHook');
});

const FetchingHook = lazy(() => {
  return import('./pages/FetchingHook');
});

const CrudHook = lazy(() => {
  return import('./pages/CrudHook');
});

const Dashboard = lazy(() => {
  return import('./pages/Dashboard');
});

const App = () => {
  const initialState = useContext(TodosContext);
  const [state, dispatch] = useReducer(TodosReducer, initialState);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  let routes;
  if (isLoggedIn) {
    routes = (
      <>
        <Router>
          <Switch>
            <Route exact path="/dashboard" component={Dashboard} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </>
    );
  } else {
    routes = (
      <>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/fundamental" component={Fundamental} />
            <Route exact path="/form" component={FormHook} />
            <Route exact path="/fetching" component={FetchingHook} />
            <Route exact path="/crud" component={CrudHook} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </>
    );
  }

  return (
    <>
      <AuthContext.Provider value={{ isLoggedIn: isLoggedIn, login: login }}>
        <TodosContext.Provider value={{ state, dispatch }}>
          <Suspense
            fallback={
              <div>
                <LoadingSpinner />
              </div>
            }
          >
            {routes}
          </Suspense>
        </TodosContext.Provider>
      </AuthContext.Provider>
    </>
  );
};

export default App;
