import { heroes } from "../data/heroes";

export const getHeroesByPublisher = (publisher) => {
  const publisherLowerCased = publisher.toLowerCase();
  const listOfPublisher = {
    dc: "DC Comics",
    marvel: "Marvel Comics",
  };

  // eslint-disable-next-line no-prototype-builtins
  if (!listOfPublisher.hasOwnProperty(publisherLowerCased))
    return "Unknown publisher";

  const listOfHeroes = heroes.filter(
    (hero) => hero.publisher === listOfPublisher[publisherLowerCased]
  );

  return listOfHeroes;
};
