import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../helpers/getHeroById";
import { useMemo } from "react";

export const HeroPage = () => {
  const { id } = useParams();
  console.log(id);
  const navigate = useNavigate();

  const hero = useMemo(() => getHeroById(id), [id]);

const onNavigateBack = () => {
    navigate(-1);
  }

  if (!hero) {
    return <Navigate to="/marvel" />;
  }

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          src={`/assets/heroes/${id}.jpg`}
          className="img-thumbnail animate__animated animate__fadeInLeft"
          alt={hero.superhero}
        />
      </div>
      <div className="col-8">
        <h3>{hero.superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-grup-item">
            <b>Alter ego:</b> {hero.alter_ego}
          </li>
          <li>
            <b>Publisher:</b> {hero.publisher}
          </li>
          <li>
            <b>First appearance:</b> {hero.first_appearance}
          </li>

          <h5 className="mt-4">Characters:</h5>
          <p>{hero.characters}</p>

          <button className="btn btn-primary" onClick={onNavigateBack}>
            Regresar
          </button>
        </ul>
      </div>
    </div>
  );
};
