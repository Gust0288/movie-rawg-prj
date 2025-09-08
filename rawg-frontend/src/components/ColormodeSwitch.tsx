import { Text, HStack, Switch, useColorMode } from "@chakra-ui/react";

export const ColormodeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack>
      <Text>Dark mode</Text>
      <Switch
        id="email-alerts"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
    </HStack>
  );
};
