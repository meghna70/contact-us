import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import people from '../images/meet.png'
import '../App.css'
import {
    useMediaQuery,
    FormControl,
    Icon,
    FormLabel,
    FormErrorMessage,
    useColorMode,
    Heading,
    Input,
    Text,
    Image,
    Button,
    FormHelperText,
    Textarea,
    Flex,
    InputLeftAddon,
    InputGroup,
    Stack,
    HStack
  } from '@chakra-ui/react'
  import { FaUserAlt, FaLock,FaEnvelope, FaMapMarkerAlt,FaPhoneAlt } from "react-icons/fa";
  
function Contact(props) {


   const [user, setUser]= useState({
      name:"",
      email:"",
      subject:"",
      message:"",
      query:""
   })

   let name, value;
   const handleResponse=(e)=>{
    console.log(e)
    name=e.target.name;
    value=e.target.value;
    setUser({...user, [name]:value
    })
   }
    const [isLargeScreen, isDisplayingInBrowser] = useMediaQuery([
      '(min-width: 700px)',
      '(display-mode: browser)',
    ])

   
  return (
  
        <div className='container'>
       <form  action='submit'>
    <Flex overflow="hidden"
          w="98.6vw"
          bgColor = "blue.700"
          direction={isLargeScreen?"row":"column-reverse"} 
          alignItems={isLargeScreen?"":"center"}
          
          p={isLargeScreen?"4em":"1em"}>
      <Stack spacing="10"
             w={isLargeScreen?"40vw":"70vw"}
             ml="0rem">
    <Heading color="teal.400">Get in Touch!</Heading>
    <Text>Leave a message or say hi</Text>
    <InputGroup>
    <InputLeftAddon children={<FaUserAlt color="gray.300" />} />
    <Input border="2px solid white" id='name' placeholder='Name' name="name" value={user.name} onChange={handleResponse}/>
    </InputGroup>

    <InputGroup>
    <InputLeftAddon children={<FaEnvelope color="gray.300" />} />
    <Input id='email' type='email' name="email" placeholder="Email" value={user.email} onChange={handleResponse}/>
    </InputGroup>
  
    <InputGroup>
    <InputLeftAddon children={<FaUserAlt color="gray.300" />} />
    <Input border="2px solid white" id='subject' placeholder='Subject' name="subject" value={user.subject} onChange={handleResponse}/>
    </InputGroup>

    <Textarea border="2px solid white" name="message" placeholder='Here is a sample message' value={user.message} onChange={handleResponse} />

    <InputGroup>
    <InputLeftAddon children={<FaUserAlt color="gray.300" />} />
    <Input border="2px solid white" id='query' placeholder='Query' name="query" value={user.query} onChange={handleResponse}/>
    </InputGroup>
    
    <Button
                
                borderRadius={0}
                type="submit"
                variant="solid"
                colorScheme="teal"
                width="full"
              >
             Submit
              </Button>
    </Stack>

    <Stack
        direction= {isLargeScreen?"column":"row"}>
      <Image w="30vw" src={people} 
             ml={isLargeScreen?"12":"5"} />
      <Stack pl= {isLargeScreen?"5em":"0em"}
              alignSelf="flex-start" spacing="3"
        color= "gray.100"
      >
           <HStack>
            <Icon as={FaMapMarkerAlt} boxSize="7"/>
            <Text fontSize="l" >Kolkata, India</Text>
           </HStack>
           <HStack>
            <Icon color="gray.100" as={FaPhoneAlt} boxSize="7"/>
            <Text fontSize="l">+91 6290447154</Text>
           </HStack>
           <HStack>
            <Icon as={FaEnvelope} boxSize="7"/>
            <Text fontSize="l">meghnabal70@gmail.com</Text>
           </HStack>
           
      </Stack>
           
   </Stack>
      </Flex>
    
    </form>
   
        </div>
   
  )
}

export default Contact