import Box from "../Box/Box";
import Heading from "../Haading/Heading";
import Text from "../Text/Text";
import Icons from "../Icons";

const Test = () => {
  return (
    <Box>
      <Heading as='h1'>Test Component</Heading>
      <Text>This is a test component to verify the setup.</Text>
      <Icons.CheckCircle size="16" />
      <Icons.CheckCircle size="24" />
      <Icons.CheckCircle size="32" color='pal/red/50' />
      <Icons.SelectChevron />
    </Box>
  );
}

export default Test;