import { GameCard } from '../GameCard/GameCard';
import { GameListProp } from './types';


export const GameList = ({ games }: GameListProp) => {

  return (
      <div className='game-list-container'>
        {games.map((game) => (
          <GameCard
            key={game.id}
            gameText={game.gameText}
            imageUrl={game.image.original.src}
          />
        ))}
      </div>
  );
};