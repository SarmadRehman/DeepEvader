import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

interface IDataContext {
  CurrentStock: string;
  setCurrentStock: (isAuthenticated: string) => void;
  apiData: {
    Overview: any;
  };
}
type DataProviderProps = {
  children: React.ReactNode;
};
const DataContext = createContext<IDataContext>({
  CurrentStock: 'aapl',
  setCurrentStock: () => {},
  apiData: {
    Overview: {},
  },
});

const ApiDataProvider = ({ children }: DataProviderProps) => {
  const Router = useRouter();
  const [CurrentStock, setCurrentStock] = useState('aapl');
  const [apiData, setApiData] = useState<any>({
    Overview: {},
  });

  const getStockOverview = async (URL: string) => {
    try {
      const fetchData = await axios.get(URL);
      setApiData({
        ...apiData,
        Overview: fetchData.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getNews = async (URL: string) => {
    try {
      const fetchData = await axios.get(URL);
      // console.log(fetchData.data)
      setApiData({
        ...apiData,
        Overview: fetchData.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (localStorage.getItem('stock')) {
      setCurrentStock(localStorage.getItem('stock') || 'aapl');
    }
    let API_URI_Overview = `https://api.thetradersinsight.com/api/stock=${CurrentStock.toUpperCase()}/overview`;
    getStockOverview(API_URI_Overview);
    let API_URI_NEWS = `https://api.thetradersinsight.com/api/stock=${CurrentStock.toUpperCase()}/news`;
  }, [CurrentStock, Router.query.stockSymbol]);

  return (
    <DataContext.Provider
      value={{
        CurrentStock,
        setCurrentStock,
        apiData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

/**
 * use Routes
 * @returns {React.ContextType<typeof AuthContext>}
 */
const useApiData = (): React.ContextType<typeof DataContext> => {
  return useContext(DataContext);
};

export { ApiDataProvider, useApiData };
