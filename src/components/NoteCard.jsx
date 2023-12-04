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
  Tooltip,
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
            <Heading size="md" overflow={"auto"}>
              {" "}
              {item.title}
            </Heading>
            <Tooltip
              label={item?.pinned ? "Unpin note" : "Pin note"}
              aria-label="A tooltip"
            >
              <IconButton
                variant="ghost"
                colorScheme="gray"
                aria-label="See menu"
                icon={item?.pinned ? <BsPinFill /> : <BsPin />}
                onClick={() => handlePinned(item)}
              />
            </Tooltip>
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
          <Tooltip label={"Archive"} aria-label="A tooltip">
            <IconButton
              variant="ghost"
              aria-label="See menu"
              icon={<IoArchiveOutline />}
              onClick={() => handleArchive(item)}
            />
          </Tooltip>
        </CardFooter>
      </Card>
    </>
  );
};

export default NoteCard;
