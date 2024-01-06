import { useState, createContext } from "react";

export const CharactersContext = createContext();

const StateCharacters = ({ children }) => {
  const [characters, setCharacters] = useState([]);
  const setListCharacters = (listCharacters) => setCharacters(listCharacters);
  return (
    <CharactersContext.Provider
      value={{
        characters,
        setListCharacters,
      }}
    >
      {children}
    </CharactersContext.Provider>
  );
};

export default StateCharacters;
