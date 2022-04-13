import React, { useEffect, useState } from "react";
import { Box, Grid, makeStyles } from "@material-ui/core";
import { TextBubble } from "./TextBubble";
import PropTypes from "prop-types";
import { TypingIndicator } from "../Common";
import { getChatDateTime } from "../utils";
import { BotAvatar } from "../Chat";

// Add styles
const useClasses = makeStyles((theme) => ({
  dateTimeContainerRight: {
    justifyContent: "flex-end",
    marginRight: "1.2rem",
    color: theme.palette.grey[400],
  },
  dateTimeContainerLeft: {
    justifyContent: "flex-start",
    color: theme.palette.grey[400],
    marginLeft: "1.2rem",
  },
}));

const MessageGroup = ({
  messages,
  alignRight = false,
  messageId,
  messageTime,
  is,
  scrollDown = () => {},
  isLast,
}) => {
  const classes = useClasses();
  const [count, setCount] = useState(1);
  const [loading, setLoading] = useState(false);
//   const { setInStore } = useContext(Store);

  useEffect(() => {
    if (messages.length > 1) {
      setLoading(true);
    //   setInStore({ showInput: false });
      let counter = count;
      const interval = setInterval(
        () => {
          if (counter >= messages.length) {
            clearInterval(interval);
            // setInStore({ showInput: true });
            scrollDown();
          } else {
            if (counter >= messages.length - 1) {
              setLoading(false);
            }
            setCount((count) => count + 1);
            counter++; // local variable that this closure will see
            scrollDown();
          }
        },
        isLast === undefined || isLast ? 2000 : 0
      );
      return () => clearInterval(interval);
    } else {
      setLoading(false);
    //   setInStore({ showInput: true });
      scrollDown();
    }
  }, [messages.length]);

  return (
    <Grid
      container
      spacing={1}
      alignItems="flex-start"
      direction={alignRight ? "row-reverse" : "row"}
      data-messageid={messageId}
    >
      <Grid item>
        <BotAvatar />
      </Grid>
      <Grid item xs={7}>
        <Grid
          container
          spacing={1}
          justifyContent={alignRight ? "flex-end" : "flex-start"}
        >
          {messages.slice(0, count).map((message, index) => (
            <Grid item key={index}>
              <TextBubble
                content={message}
                last={index + 1 === messages.length}
                alignRight={alignRight}
              />
            </Grid>
          ))}
          {loading && (
            <Box m={1}>
              <TextBubble
                content={<TypingIndicator key="typing" />}
                alignRight={alignRight}
              />
            </Box>
          )}
          <Grid
            container
            className={
              alignRight
                ? classes.dateTimeContainerRight
                : classes.dateTimeContainerLeft
            }
          >
            {messageTime && getChatDateTime(messageTime)}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

MessageGroup.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.element])
  ).isRequired,
  alignRight: PropTypes.bool,
};

export { MessageGroup };
