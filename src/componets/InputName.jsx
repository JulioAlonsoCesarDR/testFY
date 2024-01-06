import { useSelector, useDispatch } from "react-redux";
import { changeName } from "../redux/userSlice";
import IconButton from "@mui/material/IconButton";

import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import { useContext } from "react";
import { CharactersContext } from "../context/CharactersContext.jsx";

export const InputName = () => {
  const dispatch = useDispatch();

  const name = useSelector((state) => state.name.name);
  const handleChange = (e) => {
    dispatch(changeName(e.target.value));
  };

  const apiUrl = import.meta.env.VITE_API_URL_API;
  const { setListCharacters } = useContext(CharactersContext);
  const searchByName = (name) => {
    fetch(`${apiUrl}?name=${name}`)
      .then((response) => response.json())
      .then((data) => setListCharacters(data.results))
      .catch((error) => {
        error;
        setListCharacters([]);
      });
  };

  const handleBlur = () => {
    if (name === "") {
      searchByName("");
    }
  };
  return (
    <>
      <div className="container-fluid my-3">
        <FormControl className="w-50" variant="standard">
          <InputLabel>Busca a un personaje por su nombre</InputLabel>
          <Input
            id="standard-adornment-password"
            type={"text"}
            value={name}
            onChange={handleChange}
            onBlur={handleBlur}
            endAdornment={
              <InputAdornment position="end">
                <div className="bg-info-subtle  border border-primary-subtle rounded-pill mb-3">
                  <IconButton
                    onClick={() => searchByName(name)}
                    aria-label="toggle password visibility"
                  >
                    <PersonSearchIcon />
                  </IconButton>
                </div>
              </InputAdornment>
            }
          />
        </FormControl>
      </div>
    </>
  );
};