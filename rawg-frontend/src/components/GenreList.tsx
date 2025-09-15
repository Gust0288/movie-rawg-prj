import { List, ListItem, Image, Text, HStack } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import { getCroppedImageUrl } from "../services/image-url";

const GenreList = () => {
  const { data: genres, error, isLoading } = useGenres();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <List>
      {genres.map((genre) => (
        <ListItem key={genre.id}>
            <HStack>   
                <Image src={getCroppedImageUrl(genre.image_background)} boxSize="32px" borderRadius={8} margin={1} objectFit="cover" />
                <Text>{genre.name}</Text>
            </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;