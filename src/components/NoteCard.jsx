import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  IconButton,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsPinFill } from "react-icons/bs";
import { BsPin } from "react-icons/bs";
import { IoArchiveOutline } from "react-icons/io5";

const NoteCard = ({
  item,
  onOpen,
  handleUpdateId,
  handleDelete,
  handlePinned,
  handleArchive,
}) => {
  return (
    <>
      <Card className="h-max max-h-500">
        <CardHeader>
          <Flex justifyContent={"space-between"}>
            <Heading size="md"> {item.title}</Heading>
            <IconButton
              variant="ghost"
              colorScheme="gray"
              aria-label="See menu"
              icon={item?.pinned ? <BsPinFill /> : <BsPin />}
              onClick={() => handlePinned(item)}
            />
          </Flex>
        </CardHeader>

        <CardBody className="overflow-hidden">
          <Text>{item?.content}</Text>
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
          <Button
            flex="1"
            variant="ghost"
            leftIcon={"delete"}
            onClick={() => {
              handleDelete(item);
            }}
          ></Button>
          <Button
            flex="1"
            variant="ghost"
            leftIcon={"update"}
            onClick={() => {
              console.log(item);
              handleUpdateId(item.id);
              onOpen();
            }}
          ></Button>
          <IconButton
            variant="ghost"
            aria-label="See menu"
            icon={<IoArchiveOutline />}
            onClick={() => handleArchive(item)}
          />
        </CardFooter>
      </Card>
    </>
  );
};

export default NoteCard;
