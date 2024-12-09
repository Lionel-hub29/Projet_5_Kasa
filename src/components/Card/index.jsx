import React, { useEffect, useState } from "react";
import CardItem from "./CardItem";

const Card = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/API/datalogement.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des données");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch();
  }, []);

  return (
    <div className="gridCard">
      {data.length > 0
        ? data.map((item) => <CardItem item={item} key={item.id} />)
        : null}
    </div>
  );
};

export default Card;
