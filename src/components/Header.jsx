import React, { useEffect, useState } from "react";
import keeepImg from "../images/keep_2020q4_48dp.png";
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
  InputLeftAddon,
  InputRightElement,
  Button,
} from "@chakra-ui/react";
import { GrRefresh } from "react-icons/gr";
import { TfiViewList } from "react-icons/tfi";
import { AiOutlineSetting } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import { VscAccount } from "react-icons/vsc";
import { AiOutlineBars } from "react-icons/ai";
import { PhoneIcon, AddIcon, WarningIcon, Search2Icon } from "@chakra-ui/icons";
import { IoArchiveOutline } from "react-icons/io5";
import { useNavigate, Link as RouterLink, useLocation } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { search } from "../redux/keepSlice";

const Header = () => {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const isSearch = location?.pathname?.indexOf("/search") > -1 ? true : false;
  useEffect(() => {
    if (!isSearch) setSearchValue("");
  }, [isSearch]);
  useEffect(() => {
    dispatch(search(searchValue));
  }, [searchValue]);

  return (
    <>
      <div className="z-50 shadow-lg top-0 p-2 w-full bg-white fixed  header">
        <Flex direction={"row"} align={"center"} pt="10px">
          <HStack p={"12px"}>
            <Tooltip label="Main Menu" aria-label="A tooltip">
              <Link>
                <AiOutlineBars h={"24px"} w={"24px"} />
              </Link>
            </Tooltip>
          </HStack>
          <HStack
            p={"0 0 0 4px"}
            m={"0 0 2px"}
            onClick={() => navigate("/")}
            cursor={"pointer"}
          >
            <Image src={keeepImg} boxSize={"30px"}></Image>
            <Heading size={"md"}>Keep</Heading>
          </HStack>

          <HStack spacing="40px" h={"20px"} w={"100%"} marginLeft={"32px"}>
            <InputGroup width={"60%"}>
              <InputLeftElement
                pointerEvents="none"
                color="gray.300"
                fontSize="1.2em"
                children={<Search2Icon />}
              />

              {isSearch ? (
                <Input
                  variant={"filled"}
                  // p={"11px 0"}
                  type="text"
                  placeholder="Search"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                />
              ) : (
                <Input
                  onClick={() => navigate("/search")}
                  variant={"filled"}
                  // p={"11px 0"}
                  type="text"
                  placeholder="Search"
                  value=""
                  // onChange={(e) => setSearch(e.target.value)}
                />
              )}

              <InputRightElement width="4.5rem">
                {isSearch && (
                  <RxCross2
                    cursor={"pointer"}
                    onClick={() => {
                      navigate("/home");
                      setSearchValue("");
                    }}
                  />
                )}
              </InputRightElement>
            </InputGroup>
          </HStack>
          <HStack spacing="18px" h={"20px"}>
            {/* <Link onClick={() => navigate("/archive")}>
              <IoArchiveOutline />
            </Link> */}
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
      </div>

      <Divider height={"16px"} className="mt-16" />
    </>
  );
};

export default Header;
