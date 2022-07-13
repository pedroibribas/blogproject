import { createContext, useEffect, useReducer } from 'react';
import Reducer from './Reducer';

const user = JSON.parse(localStorage.getItem('user'));

const INITIAL_STATE = {
  user: user ? user : null,
  isSuccess: false,
  isError: false,
  isLoading: false,
  message: '',
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(state.user));
  }, [state.user]);

  return (
    <AuthContext.Provider value={{
      user: state.user,
      isSuccess: state.isSuccess,
      isError: state.isError,
      isLoading: state.isLoading,
      message: state.message,
      dispatch,
    }}>
      {children}
    </AuthContext.Provider>
  );
};