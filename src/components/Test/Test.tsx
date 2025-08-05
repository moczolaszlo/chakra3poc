import { Box, Button } from "@chakra-ui/react";

import Heading from "../atomic/Heading/Heading";
import Text from "../atomic/Text/Text";
import Icons from "../atomic/Icons";

const Test = () => {
  return (
    <Box>
      <Heading as='h1'>Test Component</Heading>
      <Box w='32'>
        <Text truncate>This is a test component to verify the setup.</Text>
      </Box>
      <Icons.CheckCircle size="16" />
      <Icons.CheckCircle size="24" />
      <Icons.CheckCircle size="32" color='pal/red/50' />
      <Icons.SelectChevron />
      <Icons.Cross />
      <Button variant="danger-secondary" size="lg">Button</Button>
    </Box>
  );
}

export default Test;