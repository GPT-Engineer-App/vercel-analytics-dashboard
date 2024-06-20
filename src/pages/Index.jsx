import { Box, Container, Heading, SimpleGrid, Stat, StatLabel, StatNumber, VStack } from "@chakra-ui/react";
import { FaChartLine, FaUsers, FaClock } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={4} align="stretch">
        <Heading as="h1" size="xl" textAlign="center" mb={6}>
          Vercel Analytics Dashboard
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <Stat>
            <Box display="flex" alignItems="center">
              <Box as={FaChartLine} size="24px" mr={2} />
              <StatLabel>Page Views</StatLabel>
            </Box>
            <StatNumber>45,000</StatNumber>
          </Stat>
          <Stat>
            <Box display="flex" alignItems="center">
              <Box as={FaUsers} size="24px" mr={2} />
              <StatLabel>Unique Users</StatLabel>
            </Box>
            <StatNumber>3,200</StatNumber>
          </Stat>
          <Stat>
            <Box display="flex" alignItems="center">
              <Box as={FaClock} size="24px" mr={2} />
              <StatLabel>Average Time</StatLabel>
            </Box>
            <StatNumber>3m 45s</StatNumber>
          </Stat>
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;