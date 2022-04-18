import { useState, useRef, useEffect } from 'react'
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { MemberChat } from "./MemberChat";
import { v4 as uuidv4 } from "uuid";
import { InputForm } from "../Form"

const CONVERSATION_EXAMPLE = [
  {
    id: 67457,
    msg: "Hi! Please, let me know any doubts or concerns.",
    created_on: "2021-12-09T04:32:42.969Z",
    is_bot: true,
    message_id: "396a7780-7d17-4017-8416-f8e833216c40",
    message_type_id: 1,
  },
  {
    id: 67458,
    msg: "I will. Thanks!",
    created_on: "2021-12-09T04:32:42.969Z",
    is_bot: false,
    message_id: "396a7780-7d17-4017-8416-f8e833216c40",
    message_type_id: 1,
  },
];

const useClasses = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.default,
    padding: "0.5rem 0",
    paddingBottom: "2rem",
    borderRadius: "0.5rem",
    position: "relative",
    height: "100%",
  },
  chatContainer: {
    height: "100%",
    padding: "1rem",
    paddingBottom: "3rem",
    overflow: "scroll",
  },
  formContainer: {
    position: "sticky",
    bottom: 0,
    padding: "1rem",
    backgroundColor: theme.palette.ggd.mediumGray,
    borderRadius: "0 0 0.5rem 0.5rem",
  },
  formSubContainer: {
    backgroundColor: theme.palette.background.default,
    padding: "0.5rem",
    borderRadius: '0.5rem'
  },
}));

const ChatHOC = () => {
    const classes = useClasses()
    const chatContainer = useRef()
    const [conversation, setConversation] = useState(CONVERSATION_EXAMPLE);

    const onSubmit = (data, form) => {
        const payload = {
          id: uuidv4(),
          msg: data.USER_TEXT_INPUT,
          created_on: new Date(),
          is_bot: true,
          message_id: uuidv4(),
          message_type_id: 1,
        };
        setConversation([...conversation, payload]);
        form.reset();
    }

    useEffect(() => {
        chatContainer?.current?.scrollTo(0, 10000);
    }, [conversation])

  return (
    <Box className={classes.container}>
      <Box className={classes.chatContainer} ref={chatContainer}>
        <MemberChat conversation={conversation} />
      </Box>
      <Box className={classes.formContainer}>
        <Box className={classes.formSubContainer}>
          <InputForm onSubmit={onSubmit} />
        </Box>
      </Box>
    </Box>
  );
};

export { ChatHOC };
