import React from "react";
import Rainbow from "../../assets/images/Rainbow.png";
import Dota from "../../assets/images/Dota.png";
import LoL from "../../assets/images/LoL.png";
import GenshinImpact from "../../assets/images/GenshinImpact.png";
import Overwatch from "../../assets/images/Overwatch.png";
import Skyrim from "../../assets/images/Skyrim.png";
import GamesImg from "../../assets/images/games.png";

const Games = () => {
  const games = [
    {
      title: "Rainbow six seige",
      image: Rainbow,
      borderColor: "#596475",
    },
    {
      title: "Dota 2",
      image: Dota,
      borderColor: "#9D5352",
    },
    {
      title: "League of Legends",
      image: LoL,
      borderColor: "#51B791",
    },
    {
      title: "Genshin Impact",
      image: GenshinImpact,
      borderColor: "#9C8D6B",
    },
    {
      title: "Overwatch",
      image: Overwatch,
      borderColor: "#957A86",
    },
    {
      title: "Skyrim",
      image: Skyrim,
      borderColor: "#7D8474",
    },
  ];
  return (
    <div className="category-block games-block">
      <div className="category-block__label">
        <img src={GamesImg} alt="GAMES" />
      </div>
      {games.map((game, i) => (
        <GamesItems
          key={i}
          title={game.title}
          image={game.image}
          borderColor={game.borderColor}
        />
      ))}
    </div>
  );
};
export default Games;

const GamesItems = ({ title, image, borderColor }) => {
  return (
    <div className="games-items" style={{ borderColor: borderColor }}>
      <img src={image} alt={title} />
      <div className="games-items__title">{title}</div>
    </div>
  );
};
