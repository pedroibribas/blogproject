export const RegisterPending = () => ({
  type: 'REGISTER_PENDING'
});

export const RegisterFulfilled = user => ({
  type: 'REGISTER_FULFILLED',
  payload: user
});

export const RegisterRejected = message => ({
  type: 'REGISTER_REJECTED',
  payload: message
});

export const Reset = () => ({
  type: 'RESET'
});

export const LoginPending = () => ({
  type: 'LOGIN_PENDING'
});

export const LoginFulfilled = user => ({
  type: 'LOGIN_FULFILLED',
  payload: user
});

export const LoginRejected = message => ({
  type: 'LOGIN_REJECTED',
  payload: message
});

export const Logout = () => ({
  type: 'LOGOUT'
});
