import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import { GameCard } from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";
import type { Genre } from "../hooks/useGenres";
  

interface Props {
    selectedGenre: Genre | null; 
  }
export const GameGrid = ({ selectedGenre }: Props ) => {
  const { data: games, error, isLoading } = useGames(selectedGenre);

  const skeletons = [...Array(10).keys()];

  return (
    <div>
      {error && <Text color="red.500">{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={4}
        padding={2}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer>
              <GameCardSkeleton key={skeleton} />
            </GameCardContainer>
          ))}
        {games.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </div>
  );
};