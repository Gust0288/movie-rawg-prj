import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/userGames";
import { GameCard } from "./GameCard";

export const GameGrid = () => {
const { games, error } = useGames();

  return (
    <div>
      {error && <Text color="red.500">{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={4} padding={2}>
        {games.map((game) => (
          // <li key={game.id}>{game.name}</li>
          <GameCard key={game.id} game={game}></GameCard>
        ))}
      </SimpleGrid>
    </div>
  );
};
