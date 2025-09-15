import { Card, CardBody, Heading, HStack, Icon, Image, Text } from "@chakra-ui/react";
import type { Game } from "../hooks/userGames";
import type { ReactNode } from "react";
import PlatformIconsList from "./PlatformIconsList";

interface Props {
  game: Game;
}

export const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image} alt={game.name} />
      <PlatformIconsList
        platforms={game.parent_platforms.map((p) => p.platform)}
      />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
      </CardBody>
    </Card>
  );
};