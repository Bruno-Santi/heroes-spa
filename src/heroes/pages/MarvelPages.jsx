import { HeroList } from "../components";

export const MarvelPages = () => {
  return (
    <>
      <h1>Marvel Comics</h1>
      <hr></hr>

      <HeroList publisher={"marvel"} />
    </>
  );
};
