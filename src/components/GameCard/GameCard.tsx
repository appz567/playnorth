import Image from "next/image";

import { GameCardProps } from "./types";

export const GameCard = ({ gameText, imageUrl }: GameCardProps) => {
  return (
    <div className="game-container">
      <Image src={imageUrl} alt={"test"} width={200} height={200} />
      <h2 className="game-title">{gameText}</h2>
    </div>
  );
};
