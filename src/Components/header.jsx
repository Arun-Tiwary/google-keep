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
  Link,
  Divider,
  Tooltip,
} from "@chakra-ui/react";
import { GrRefresh } from "react-icons/gr";
import { TfiViewList } from "react-icons/tfi";
import { AiOutlineSetting } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import { VscAccount } from "react-icons/vsc";
import { AiOutlineBars } from "react-icons/ai";

const Header = () => {
  return (
    <>
      <Flex direction={"row"} align={"center"} pt="10px">
        <HStack p={"12px"}>
          <Tooltip label="Main Menu" aria-label="A tooltip">
            <Link>
              <AiOutlineBars h={"24px"} w={"24px"} />
            </Link>
          </Tooltip>
        </HStack>
        <HStack p={"0 0 0 4px"} m={"0 0 2px"}>
          <Image src={keeepImg} boxSize={"30px"}></Image>
          <Heading size={"md"}>Keep</Heading>
        </HStack>
        <InputGroup p={"0 50px 0 50px"}>
          <InputLeftElement></InputLeftElement>
          <Input
            variant={"filled"}
            p={"11px 0"}
            type="text"
            placeholder="Search"
          />
        </InputGroup>
        <HStack spacing="18px" h={"20px"}>
          <Link>
            <GrRefresh />
          </Link>
          <Link>
            <TfiViewList />
          </Link>
          <Link>
            <AiOutlineSetting />
          </Link>
        </HStack>
        <HStack p={"0 4px 0 30px"} spacing="16px" h={"20px"}>
          <Link>
            <TbGridDots />
          </Link>
          <Link>
            <VscAccount />
          </Link>
        </HStack>
      </Flex>
      <Divider height={"16px"} />
    </>
  );
};

export default Header;
