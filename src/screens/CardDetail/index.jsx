import React, { useState, useEffect } from "react";
import StarRating from "../../components/StarRating";
import CollapseDetail from "../../components/Collapse/collapseDetail";
import { useParams, useNavigate } from "react-router-dom";
import { routes } from "../../routes";
import "react-slideshow-image/dist/styles.css";
import "react-multi-carousel/lib/styles.css";
import SlideShow from "../../components/SlideShow";
const CardDetail = () => {
  const [item, setItem] = useState({});

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`/API/datalogement.json`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des données");
        }
        return response.json();
      })
      .then((data) => {
        const item = data.find((item) => item.id === id);

        if (!item) {
          navigate(routes.notFound);
          return;
        }

        setItem(item);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id, navigate]);
  //   Handling 404

  if (Object.keys(item).length === 0) return <div className="loader"></div>;

  return (
    <main>
      <SlideShow images={item.images} />

      <div className="cardDetail-contenu">
        <div className="element-gauche">
          <div className="cardDetail-gauche">
            <p className="cardDetail-title">{item.title}</p>
            <p className="cardDetail-title-location">{item.location}</p>
          </div>

          {item.tags && Array.isArray(item.tags) && (
            <div className="cardDetail-balises">
              {item.tags.map((tag, index) => (
                <p key={index} className="balise">
                  {tag}
                </p>
              ))}
            </div>
          )}
        </div>

        <div className="element-droit">
          <div className="cardDetail-hote">
            <p className="cardDetail-hote-nom">{item.host.name}</p>
            <img
              className="cardDetail-hote-pic"
              src={item.host.image}
              alt={item.host.name}
            ></img>
          </div>
          <div className="note">
            <StarRating rating={item.note} />
          </div>
        </div>
      </div>
      <div className="accordeon-detail">
        <div className="accordeon-left">
          <div className="cardDetail-accordeon">
            <CollapseDetail
              title="Description"
              content={item?.description || "Aucune description disponible"}
              isOpen={true}
            />
          </div>
        </div>

        <div className="accordeon-right">
          <div className="cardDetail-accordeon">
            <CollapseDetail
              title="&Eacute;quipements"
              content={
                item.equipements && item.equipements.length > 0 ? (
                  <ul>
                    {item.equipements.map((equipement, index) => (
                      <li className="listeEquipement" key={index}>
                        {equipement}
                      </li>
                    ))}
                  </ul>
                ) : (
                  "Aucun équipement disponible"
                )
              }
              isOpen={true}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default CardDetail;
