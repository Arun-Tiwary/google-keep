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
import { MdRestoreFromTrash } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";

const TrashNoteCard = ({ item, handleTrash, deleteForever }) => {
  return (
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
              minW: "23px",
            },
          }}
        >
          <Tooltip label="Delete forever" aria-label="A tooltip">
            <IconButton
              variant="ghost"
              colorScheme="gray"
              aria-label="See menu"
              icon={<MdDeleteForever />}
              onClick={() => deleteForever(item)}
            />
          </Tooltip>
          <Tooltip label="Restore" aria-label="A tooltip">
            <IconButton
              variant="ghost"
              colorScheme="gray"
              aria-label="See menu"
              icon={<MdRestoreFromTrash />}
              onClick={() => handleTrash(item)}
            />
          </Tooltip>
        </CardFooter>
      </Card>
    </>
  );
};

export default TrashNoteCard;
