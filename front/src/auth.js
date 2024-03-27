export const isAuthenticated = () => {
    return localStorage.getItem('token') !== null;
  };
  

  export const login = (username, password) => {
    if (username === 'admin' && password === 'password') {
      localStorage.setItem('token', 'example_token');
      return true; // Autentication ok
    }
    return false; 
  };
  

  export const logout = () => {
    localStorage.removeItem('token');
  };
  