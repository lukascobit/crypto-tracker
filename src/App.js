import './App.css';
import React, {useState,useEffect} from 'react'
import axios from 'axios'
import Coin from './Coin';



function App() {

  const [coins,setCoins] = useState([])
  const [search,setSearch] = useState('')

  useEffect(()=>{
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=czk&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then(res =>{
      setCoins(res.data)
      console.log(res.data)
    })
    .catch(error => console.log(error))
  },[])

  const handleChange = e => {
    setSearch(e.target.value)
  }

  const FilteredCoins = coins.filter(coin => 
    coin.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="coin-app">
      <h1> test </h1>
      <div className="search" onChange={handleChange}></div>
      <input placeholder="Search a currency..."></input>
      {FilteredCoins.map(coin =>{
        return(
          <Coin 
          key={coin.id} name={coin.name} image={coin.image} symbol={coin.symbol} volume={coin.market_cap} price={coin.current_price}
          />
        )
      })}
    </div>
  );
}

export default App;
