import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../helpers/getHeroById";
import { useMemo, useState } from "react";
import "animate.css";
export const HeroPage = () => {
  const { id } = useParams();

  const navigate = useNavigate();
  const [backing, setBacking] = useState(false);

  const onNavigateBack = () => {
    setBacking(true);
    setTimeout(() => {
      navigate(-1);
    }, 400);
  };

  const conditionalClassName = backing
    ? "row mt-5 animate__animated animate__fadeOutLeft animate__faster"
    : "row mt-5 animate__animated animate__fadeInLeft animate__fast";
  const hero = useMemo(() => getHeroById(id), [id]);

  const imgPath = `/assets/heroes/${id}.jpg`;

  if (!hero) return <Navigate to='/marvel'></Navigate>;

  return (
    <div className={conditionalClassName}>
      <div className='col-4 '>
        <img
          src={imgPath}
          alt={hero.superhero}
          className='img-thumbnail '
        />
      </div>
      <div className='col-8'>
        <h3>{hero.superhero}</h3>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'>
            <b>Alter Ego:</b> {hero.alter_ego}
          </li>
          <li className='list-group-item'>
            <b>Publisher:</b> {hero.publisher}
          </li>
          <li className='list-group-item'>
            <b>First appearance:</b> {hero.first_appearance}
          </li>
        </ul>
        <h5 className='mt-3'>Characters</h5>
        <p>{hero.characters}</p>
        <button
          className='btn btn-outline-info'
          onClick={onNavigateBack}
        >
          Back
        </button>
      </div>
    </div>
  );
};
