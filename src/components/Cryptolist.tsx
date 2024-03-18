import  { useState, useEffect } from 'react';
import "../Crypto.css"

type Crypto ={
  id: string;
  name: string;
  current_price: number;
  price_change_24h: number;
  price_change_percentage_24h: number;
}

export default function CryptoList(){
  const [cryptoData, setCryptoData] = useState<Crypto[]>([]);
  const [fetchError, setFetchError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=20&page=1');
        if (!response.ok) {
          setFetchError(true);
        } else {
          const data = await response.json();
          setCryptoData(data);
        }
      } catch (error) {
        setFetchError(true);
      }
    };
    fetchData();
  }, []);

  if (fetchError) {
    return <></> ;
  }

  return (
    <div className='absolute'>
    <div className={`py-1 overflow-x-hidden `}>
      <div className="flex space-x-4 animate-marquee">
        {cryptoData.map((crypto: Crypto) => (
          <div key={crypto.id} className="border rounded-lg px-4">
            <div className="text-sm font-medium text-white">{crypto.name}</div>
            <div className={`text-sm ${crypto.price_change_percentage_24h < 0 ? 'text-red-600' : 'text-green-600'}`}>${crypto.current_price.toFixed(2)}</div>
            <div className={`text-sm ${crypto.price_change_percentage_24h < 0 ? 'text-red-600' : 'text-green-600'}`}>
              {crypto.price_change_24h.toFixed(2)} ({crypto.price_change_percentage_24h.toFixed(2)}%)
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};
