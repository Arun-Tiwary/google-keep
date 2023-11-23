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

const NoteCard = ({
  item,
  onOpen,
  handleUpdateId,
  handleDelete,
  handlePinned,
}) => {
  const dispatch = useDispatch();

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
        </CardFooter>
      </Card>
    </>
  );
};

export default NoteCard;
