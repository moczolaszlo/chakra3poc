import Box from "../Box/Box";
import Heading from "../Haading/Heading";
import Text from "../Text/Text";

const Test = () => {
  return (
    <Box background={'red.90'}>
      <Heading as='h1'>Test Component</Heading>
      <Text>This is a test component to verify the setup.</Text>
    </Box>
  );
}

export default Test;