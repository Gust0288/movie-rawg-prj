import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import type { Game } from "../hooks/userGames";


interface Props {
    game: Game;
}

export const GameCard = ({ game }: Props) => {
  return <Card>
    <Image src={game.background_image} width="100%" height="auto" alt="Game Cover" />
    <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
    </CardBody>
  </Card>
};
