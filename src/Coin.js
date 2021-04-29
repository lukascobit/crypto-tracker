import React from 'react'

const Coin = ({name ,image ,symbol , price, volume}) => {
    return (
        <div className="coin-container">
            <div className="coin">
                <img src={image} alt="crypto"/>
                <h1>{name}</h1>
                <p className="symbol"></p>
                <div className="data">
                    <p className="price">${price}</p>
                    <p className="volume">${volume.toLocaleString()}</p>
                    
                </div>
            </div>
        </div>
    )
}

export default Coin
