import React from "react";
import keeepImg from "../Images/keep_2020q4_48dp.png";
import {
  Flex,
  Image,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  HStack,
  Button,
  Link,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { GrRefresh } from "react-icons/gr";
import { TfiViewList } from "react-icons/tfi";
import { AiOutlineSetting } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import { VscAccount } from "react-icons/vsc";
import { AiOutlineBars } from "react-icons/ai";

const Header = () => {
  return (
    <Flex direction={"row"} align={"center"}>
      <HStack p={"12px"}>
        <Link>
          <AiOutlineBars h={"24px"} w={"24px"} />
        </Link>
      </HStack>
      <HStack p={"0 0 0 4px"} m={"0 0 2px"}>
        <Image src={keeepImg} boxSize={"30px"}></Image>
        <Heading size={"lg"}>Keep</Heading>
      </HStack>
      <InputGroup p={"0 50px 0 50px"}>
        <Input
          variant={"filled"}
          p={"11px 0"}
          type="text"
          placeholder="Search"
        />
      </InputGroup>
      <HStack spacing="24px" h={"20px"}>
        <GrRefresh />
        <TfiViewList />
        <AiOutlineSetting />
      </HStack>
      <HStack spacing="24px" h={"20px"}>
        <TbGridDots />
        <VscAccount />
      </HStack>
    </Flex>
  );
};

export default Header;
