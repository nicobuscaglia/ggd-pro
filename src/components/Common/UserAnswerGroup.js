import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import { TextBubble } from "./TextBubble";
import { getChatDateTime } from "../utils";
import { CONVERSATION_MESSAGE_TYPES } from "../Chat/contants";
import { ValidatedAnswer } from "./ValidatedAnswer";
import { UserImagePreview } from "./UserImagePreview";
import { PharmacyPreview } from "./PharmacyPreview";
// import { getLocale } from "../../services";
import { UserPdfPreview } from "./UserPdfPreview";

// const CAPTIONS = {
//   updateAnswer: {
//     "en-us": "Update answer",
//     "es-mx": "Actualizar respuesta",
//   },
// };

const useClasses = makeStyles((theme) => ({
  dateTimeContainerRight: {
    color: theme.palette.grey[400],
    marginRight: "1.2rem",
  },
  link: {
    cursor: "pointer",
    color: theme.palette.blue.main,
    marginRight: "0.3rem",
  },
  textBubble: {
    "& .MuiPaper-root": {
      minWidth: "10rem",
      textAlign: "end",
    },
  },
}));

const renderMessages = (msgTypeId, messages) => {
  switch (msgTypeId) {
    case CONVERSATION_MESSAGE_TYPES.VALIDATED_ANSWER_TYPE_ID: {
      const message = JSON.parse(messages[0]);
      return (
        <>
          <ValidatedAnswer message={JSON.parse(messages[0])} />
          {message?.imageBase64?.includes("application/pdf") && (
            <UserPdfPreview file={message.imageBase64} />
          )}
        </>
      );
    }
    case CONVERSATION_MESSAGE_TYPES.IMAGE_PREVIEW_TYPE_ID: {
      const message = JSON.parse(messages[0]);
      return (
        <>
          {message?.validatedAnswer && (
            <ValidatedAnswer message={message?.validatedAnswer} />
          )}
          <UserImagePreview
            imagePath={message?.imagePath}
            imageBase64={message?.imageBase64}
            attachmentId={message?.attachmentId}
          />
        </>
      );
    }
    case CONVERSATION_MESSAGE_TYPES.PHARMACY_VIEW_TYPE_ID: {
      const pharmacy = JSON.parse(messages[0]);
      return <PharmacyPreview pharmacy={pharmacy} />;
    }
    default:
      return messages.map((message, index) => (
        <Grid item key={index}>
          <TextBubble
            content={message}
            last={index + 1 === messages.length}
            alignRight
          />
        </Grid>
      ));
  }
};

const UserAnswerGroup = ({
  msgTypeId,
  messages,
  messageId,
  messageTime,
  updateMessage = () => {},
  enableUpdate = false,
}) => {
  const classes = useClasses();
//   const locale = getLocale();

  return (
    <Grid
      container
      spacing={1}
      alignItems="flex-start"
      direction="row-reverse"
      data-messageid={messageId}
    >
      <Grid item xs={7}>
        <Grid container spacing={1} justifyContent="flex-end">
          <Grid item>
            <Grid
              container
              spacing={1}
              direction="column"
              alignContent="flex-end"
              className={enableUpdate ? classes.textBubble : ""}
            >
              {renderMessages(msgTypeId, messages)}
            </Grid>
          </Grid>
          <Grid
            data-cy="update_answer_container"
            container
            justifyContent="flex-end"
          >
            {/* {enableUpdate && (
              <Grid item>
                <Link
                  onClick={() => updateMessage(messageId)}
                  className={classes.link}
                  id={`btn-updateanswer-${messageId}`}
                >
                  {CAPTIONS.updateAnswer[locale]}
                </Link>
              </Grid>
            )} */}
            <Grid item className={classes.dateTimeContainerRight}>
              {messageTime && getChatDateTime(messageTime)}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export { UserAnswerGroup };
