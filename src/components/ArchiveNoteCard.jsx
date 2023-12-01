import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  IconButton,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import React from "react";
import { BsPin, BsPinFill } from "react-icons/bs";
import { MdOutlineUnarchive } from "react-icons/md";

const ArchiveNoteCard = ({ item, handleArchive }) => {
  return (
    <>
      <>
        <Card className="h-max max-h-500">
          <CardHeader>
            <Flex justifyContent={"space-between"}>
              <Heading size="md" overflow={"auto"}>
                {" "}
                {item.title}
              </Heading>
              <IconButton
                variant="ghost"
                colorScheme="gray"
                aria-label="See menu"
                icon={item?.pinned ? <BsPinFill /> : <BsPin />}
                //   onClick={() => handlePinned(item)}
              />
            </Flex>
          </CardHeader>

          <CardBody className="overflow-hidden">
            <Text>{item?.content || (item?.title ? "" : "Empty note")}</Text>
          </CardBody>
          <CardFooter
            justify="space-between"
            // flexWrap="wrap"
            sx={{
              "& > button": {
                minW: "16px",
              },
            }}
          >
            <Tooltip label="Unarchive" aria-label="A tooltip">
              <IconButton
                className="hover:bg-white"
                variant="ghost"
                aria-label="See menu"
                icon={<MdOutlineUnarchive />}
                onClick={() => handleArchive(item)}
              />
            </Tooltip>
          </CardFooter>
        </Card>
      </>
    </>
  );
};

export default ArchiveNoteCard;
