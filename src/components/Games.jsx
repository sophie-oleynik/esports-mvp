import React from "react";
import Rainbow from "../assets/images/games/Rainbow.png";
import Dota from "../assets/images/games/Dota.png";
import LoL from "../assets/images/games/LoL.png";
import GenshinImpact from "../assets/images/games/GenshinImpact.png";
import Overwatch from "../assets/images/games/Overwatch.png";
import Skyrim from "../assets/images/games/Skyrim.png";
import GamesImg from "../assets/images/games/games.png";
import GamesImgMob from "../assets/images/games/games_mob.png";

const Games = () => {
  const games = [
    {
      title: "Rainbow six seige",
      image: Rainbow,
      color: "grey",
    },
    {
      title: "Dota 2",
      image: Dota,
      color: "red",
    },
    {
      title: "League of Legends",
      image: LoL,
      color: "green",
    },
    {
      title: "Genshin Impact",
      image: GenshinImpact,
      color: "yellow",
    },
    {
      title: "Overwatch",
      image: Overwatch,
      color: "pink",
    },
    {
      title: "Skyrim",
      image: Skyrim,
      color: "platinum",
    },
  ];
  return (
    <div className="category-block games-block">
      <div className="category-block__label">
        <picture>
          <source srcset={GamesImg} media="(min-width: 600px)" />
          <img src={GamesImgMob} alt="GAMES" />
        </picture>
      </div>
      {games.map((game, i) => (
        <GamesItems
          key={i}
          title={game.title}
          image={game.image}
          color={game.color}
        />
      ))}
    </div>
  );
};
export default Games;

const GamesItems = ({ title, image, color }) => {
  return (
    <div className={`games-items ${color}`}>
      <img src={image} alt={title} />
      <div className="games-items__title">{title}</div>
    </div>
  );
};
