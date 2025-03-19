//otras solucion usando useEffect
import React, { useEffect, useState } from "react";
import { HeroCard } from "../components/HeroCard";
import { useForm } from "../../hooks/useForm";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import { getHeroByName } from "../helpers/getHeroByName";

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = "" } = queryString.parse(location.search);
  const [heroes, setHeroes] = useState([]);
  const [loading, setLoading] = useState(false);

  const { onInputChange, searchText } = useForm({
    searchText: q,
  });

  const onSearchSubmit = (event) => {
    event.preventDefault();
    if (searchText.trim().length <= 1) return;

    navigate(`?q=${searchText}`);
  };

  useEffect(() => {
    const fetchHeroes = async () => {
      setLoading(true); // Iniciar carga
      if (q.trim().length > 1) {
        const heroResults = await getHeroByName(q); // Usar await para esperar la respuesta
        setHeroes(heroResults);
      } else {
        setHeroes([]); // Limpiar resultados si no hay búsqueda
      }
      setLoading(false); // Terminar carga
    };

    fetchHeroes(); // Llamada a la función asíncrona
  }, [q]); // Solo se vuelve a ejecutar cuando 'q' cambia

  useEffect(() => {
    // Esto actualiza la URL cuando el input se borra
    if (searchText.trim() === "") {
      navigate("?q="); // Si el campo está vacío, limpiamos la URL
    }
  }, [searchText, navigate]); // Se ejecuta cada vez que 'searchText' cambia

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

          {/* Mostrar mensaje cuando el input está vacío */}
          {q === "" && !loading && (
            <div className="alert alert-primary">Search a hero</div>
          )}

          {/* Mostrar mensaje cuando no hay resultados y la búsqueda no está vacía */}
          {q !== "" && heroes.length === 0 && !loading && (
            <div className="alert alert-danger">
              No results found for <b>{q}</b>
            </div>
          )}

          {/* Mostrar estado de carga */}
          {loading && <div className="alert alert-info">Loading...</div>}

          {heroes.map((hero) => (
            <HeroCard key={hero.id} hero={hero} />
          ))}
        </div>
      </div>
    </>
  );
};
