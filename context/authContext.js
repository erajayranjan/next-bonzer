import React from 'react';

// Creating the context object and passing the default values.
const authContext = React.createContext(
    {
        status:false,
    });
  console.log(authContext)
export default authContext;
