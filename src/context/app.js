import React, { useState, useMemo, useContext } from 'react';

const AppContext = React.createContext();

export const AppContextProvider = (props) => {
  const [isLoading, setIsLoading ] = useState(false);

  const value = useMemo(() => {
    return ({
      isLoading,
      setIsLoading,
    });
  },[isLoading]);

  return <AppContext.Provider value={value} {...props} />;
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if(!context) {
    throw new Error('useAppContext must be defined inside AppContext');
  }
  return context;
};
