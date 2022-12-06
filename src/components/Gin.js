import React from 'react'
import {useState, useEffect } from 'react'

const Gin = () => {
    const [gin , setGin] = useState(null)

    useEffect(() => {
        const url = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin";
        fetch(url)
        .then((response) => response.json())
        .then((json) => {
          setGin(json)
        })
        .catch(console.error) 
      }, []);


  return ( gin ?

    <div>
      {gin.drinks.map((ginMap,idx) => {
        return (

      <div key={idx} className='componentCSS'>
            <div>        
              <img width={150} src={ginMap.strDrinkThumb}></img>
            </div>
            <div className="cardTitle">
              {ginMap.strDrink}
            </div>
        </div>
               )
          })} 
    </div>
      :
    <p> loading .. </p>
)
}

export default Gin