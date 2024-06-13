import { useState } from 'react';
import { Box, Heading, Flex, Input, Button, FormControl, FormLabel, Text } from "@chakra-ui/react";

const Request = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [submittedName, setSubmittedName] = useState('');
  const [submittedPhoneNumber, setSubmittedPhoneNumber] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = () => {
    if (!name || !phoneNumber) {
      setErrorMessage('Please fill out all fields');
      return;
    }
    setSubmitted(true);
    setSubmittedName(name);
    setSubmittedPhoneNumber(phoneNumber);
    setName('');
    setPhoneNumber('');
    setErrorMessage('');
  };

  return (
    <Flex justifyContent="center" alignItems="center" >
      <Box style={{padding:"40px"}}>
        <Heading mb="4">Leave a request to be called</Heading>
        <Flex mb="4" justifyContent="space-between" alignItems="flex-end">
          <FormControl flex="1" mr="4">
            <FormLabel>Your name</FormLabel>
            <Input type="text" placeholder='Enter your name' value={name} onChange={(e) => setName(e.target.value)} />
          </FormControl>
          <FormControl flex="1">
            <FormLabel>Your phone number</FormLabel>
            <Input type="tel" placeholder='+91 __' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
          </FormControl>
          <Button style={{backgroundColor:"#da5c2f"}} onClick={handleSubmit}>SEND</Button>
        </Flex>
        {errorMessage && (
          <Text color="red.500" mb="4">{errorMessage}</Text>
        )}
        {/* {submitted && (
          <Box mt="4">
            <Text>Your name: {submittedName}</Text>
            <Text>Your phone number: {submittedPhoneNumber}</Text>
          </Box>
        )} */}
      </Box>
    </Flex>
  );
};

export default Request;