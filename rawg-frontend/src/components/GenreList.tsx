import { List, ListItem, Image, Text, HStack, Spinner, Button } from "@chakra-ui/react";
import useGenres, { type Genre } from "../hooks/useGenres";
import { getCroppedImageUrl } from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
  const { data: genres, error, isLoading } = useGenres();

  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <List>
      {genres.map((genre) => (
        <ListItem key={genre.id}>
            <HStack>   
                <Image src={getCroppedImageUrl(genre.image_background)} boxSize="32px" borderRadius={8} margin={1} objectFit="cover" />
                <Button variant="link" onClick={() => onSelectGenre(genre)}>{genre.name}</Button>
            </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;