import { heroes } from "../data/heroes";
export const getHeroesByPublisher = (publisher) => {
  //console.log("🔍 Heroes disponibles:", heroes); // Verifica si 'heroes' tiene los datos
  const validPublishers = ["DC Comics", "Marvel Comics"];

  if (!validPublishers.includes(publisher)) {
    throw new Error(`El publisher "${publisher}" no es válido`);
  }

  const filteredHeroes = heroes.filter((hero) => hero.publisher === publisher);
  
  //console.log(`🎯 Héroes filtrados para "${publisher}":`, filteredHeroes);

  return filteredHeroes;
};
