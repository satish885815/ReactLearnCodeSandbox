import React, { useState, useEffect } from "react";

const Tile = ({ tile, index, handleClick }) => {
  const { color } = tile;

  return (
    <div
      onClick={() => handleClick(index)}
      style={{
        width: "100px",
        height: "100px",
        backgroundColor: color,
        display: "inline-block",
        margin: "5px",
        cursor: "pointer",
        transition: "background-color 0.5s ease",
      }}
    />
  );
};

const TileGrid = () => {
  const [tiles, setTiles] = useState(
    Array(9).fill({ color: "white", clicked: false })
  );
  const [allClicked, setAllClicked] = useState(false);
  const [clickOrder, setClickOrder] = useState([]);

  const handleClick = (index) => {
    if (!tiles[index].clicked) {
      const newTiles = [...tiles];
      newTiles[index] = {
        color: "green",
        clicked: true,
      };
      setTiles(newTiles);
      setClickOrder([...clickOrder, index]);

      if (newTiles.every((tile) => tile.clicked)) {
        setAllClicked(true);
      }
    }
  };

  useEffect(() => {
    if (allClicked) {
      let delay = 1000;
      clickOrder.reverse().forEach((index, idx) => {
        setTimeout(() => {
          setTiles((prevTiles) => {
            const newTiles = [...prevTiles];
            newTiles[index] = { color: "white", clicked: false };
            return newTiles;
          });
          if (idx === clickOrder.length - 1) {
            setClickOrder([]);
            setAllClicked(false);
          }
        }, delay);
        delay += 1000;
      });
    }
  }, [allClicked, clickOrder]);

  return (
    <div>
      {tiles.map((tile, index) => (
        <Tile key={index} tile={tile} index={index} handleClick={handleClick} />
      ))}
    </div>
  );
};

export default TileGrid;
