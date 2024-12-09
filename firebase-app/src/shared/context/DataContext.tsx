import { useFirebaseData } from '@/shared/hooks/useFirebase';
import React, { createContext, useContext } from 'react';

interface DataContextValue {
  data: any;
}

const DataContext = createContext<DataContextValue | undefined>(undefined);

export const useData = (path: string) => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  const { data } = context;
  const fetchData = useFirebaseData(path); // Fetch data using the provided path
  return { data: fetchData || data };
};

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <DataContext.Provider value={{ data: null }}>{children}</DataContext.Provider>;
};
