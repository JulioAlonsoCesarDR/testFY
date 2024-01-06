import { useContext } from "react";
import { CharactersContext } from "../context/CharactersContext";

import {
  FlippingCard,
  FlippingCardBack,
  FlippingCardFront,
} from "react-ui-cards";
import Image from "react-bootstrap/Image";

const CardCharacters = () => {
  const { characters } = useContext(CharactersContext);

  const Card = ({ item }) => {
    return (
      <div className="flip-card">
        <FlippingCard>
          <FlippingCardBack>
            <h4>Status</h4> <span> {item.status} </span>
            <h4>Especie</h4> <span> {item.species} </span>
            <h4>Genero</h4> <span> {item.gender} </span>
          </FlippingCardBack>
          <FlippingCardFront>
            <Image src={item.image} thumbnail />
            {item.name}
          </FlippingCardFront>
        </FlippingCard>
      </div>
    );
  };

  return (
    <div className="container py-3 mt-3 bg-secondary text-light">
      <div className="d-flex  flex-wrap align-items-center- justify-content-center">
        {characters?.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default CardCharacters;
