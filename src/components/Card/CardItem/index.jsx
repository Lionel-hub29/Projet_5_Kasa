import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../../../routes";

const CardItem = ({ item }) => {
  const { id, title, thumbnail } = item;

  if (!id || !title || !thumbnail) return null;

  return (
    <Link to={routes.cardDetail.replace(":id", id)} className="card-item">
      <img src={thumbnail} alt={title} />
      <p className="card-title">{title}</p>
    </Link>
  );
};

export default CardItem;
