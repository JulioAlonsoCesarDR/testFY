import { useEffect, useContext } from "react";
import { InputName } from "./componets/InputName.jsx";
import { CharactersContext } from "./context/CharactersContext.jsx";
import "./Styles.css";
import CardCharacters from "./componets/CardCharacters.jsx";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

function App() {
  const { setListCharacters } = useContext(CharactersContext);
  const apiUrl = import.meta.env.VITE_API_URL_API;

  const fetchAPI = (page = 1) => {
    fetch(`${apiUrl}?page=${page}`)
      .then((response) => response.json())
      .then((data) => setListCharacters(data.results))
      .catch((error) => error);
  };
  useEffect(() => {
    fetchAPI();
  }, []);
  const handleChangePag = (page) => {
    fetchAPI(page);
  };
  return (
    <>
      <div className="container mt-5 ">
        <div className="bg-light-subtle d-flex flex-column text-center">
          <h1 className="text-secondary">
            Busca a los personajes de <span className="text-info">Rick </span> &
            <span className="text-warning"> Morty </span>
          </h1>
          <InputName />
        </div>
        <div className="d-flex align-items-center justify-content-center bg-primary-subtle py-3">
          <Stack spacing={2}>
            <Pagination
              hideNextButton
              hidePrevButton
              onChange={(e, page) => {
                handleChangePag(page);
              }}
              count={10}
              variant="outlined"
              shape="rounded"
            />
          </Stack>
        </div>
        <CardCharacters />
      </div>
    </>
  );
}

export default App;
