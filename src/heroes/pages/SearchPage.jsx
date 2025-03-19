import { HeroCard } from "../components/HeroCard";
import { useForm } from "../../hooks/useForm";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import { getHeroByName } from "../helpers/getHeroByName";

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = "" } = queryString.parse(location.search);


  const heroes = getHeroByName(q);

  const showSearch = q.length === 0;
  const showError = q.length > 0 && heroes.length === 0;

  const { onInputChange, searchText } = useForm({
    searchText: q,
  });

  const onSearchSubmit = (event) => {
    event.preventDefault();
/*     if (searchText.trim().length <= 1) return;
 */
    navigate(`?q=${searchText}`);
  };


  return (
    <>
      <h1>SearchPage</h1>
      <br />
      <div className="row">
        {/* Columna izquierda: Formulario de búsqueda */}
        <div className="col-md-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input
              type="text"
              placeholder="Search for a hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />
            <button className="btn btn-primary mt-2">Search</button>
          </form>
        </div>

        {/* Columna derecha: Resultados */}
        <div className="col-md-7">
          <h4>Resultados</h4>
          <hr />

          {/* <div className="alert alert-primary">Search a hero</div>
             <div className="alert alert-danger">No hero with <b>this name {q}</b></div> */}


          <div
            className="alert alert-primary animate__animated animate__fadeInLeft"
            style={{ display: showSearch ? "" : "none" }}
          >
            search a hero
          </div>
          <div
            className="alert alert-danger animate__animated animate__fadeInLeft"
            style={{ display: showError ? "" : "none" }}
          >
            no hero with <b>this name {q}</b>
          </div>

          {heroes.map((hero) => (
            <HeroCard className = "animate__animated animate__fadeInLeft" key={hero.id} hero={hero} />
          ))}
        </div>
      </div>
    </>
  );
};
