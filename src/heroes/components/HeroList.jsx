import React, { useMemo } from 'react'
import { getHeroesByPublisher } from "../helpers/getHeroesByPublisher"; 
import { HeroCard } from './HeroCard';
export const HeroList = ({publisher}) => {

  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);
   
  if (heroes.length === 0) {
    return <p>No hay héroes disponibles para este publisher.</p>;
  }

  return (
    <div className='row row-cols-1 row-cols-md-3 g-3'>
    {
    
    heroes.map((hero) => (
      <div key={hero.id} className="col">
        <HeroCard hero={hero} />
      </div>
    ))
    
    }
  </div>  )
}
