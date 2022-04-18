import { Box, Typography } from "@mui/material";
import { MessageGroup, UserAnswerGroup } from '../Common';
import { stripHtml } from "string-strip-html";

const MemberChat = ( {conversation }) => {
    
    //   const getChatHeader = () => {
    //     // const pathArray = link?.split("/");
    //     return `Patient's intake history`;
    //   };

      const RenderTextMessage = (message, msgId, chatTime) => {
        return (
          <Box my={2} key={msgId}>
            <MessageGroup
              messages={[message]}
              messageId={msgId}
              messageTime={chatTime}
            />
          </Box>
        );
      };

      const renderUserAnswer = (answer, msgId, createdOn, msgTypeId) => {
        return (
          <UserAnswerGroup
            key={msgId}
            alignRight
            msgTypeId={msgTypeId}
            messages={[stripHtml(answer || "").result]}
            messageId={msgId}
            messageTime={createdOn}
          />
        );
      };

    return (
        <Box>
            {/* <Box
                p={3}
                style={{
                position: "sticky",
                top: 0,
                zIndex: 1,
                backgroundColor: "#222525",
                }}
            >
                <Typography style={{ color: "#fff" }}>{getChatHeader()}</Typography>
            </Box> */}
            <Box>
                {conversation?.length > 0 ? (
                conversation.map((message) => {
                    if (message.is_bot) {
                    return RenderTextMessage(
                        message.msg,
                        message.id,
                        message.created_on
                    );
                    } else {
                    return renderUserAnswer(
                        message.msg,
                        message.id,
                        message.created_on,
                        message.message_type_id
                    );
                    }
                })
                ) : (
                <Box display="flex" alignItems="center" justifyContent="center">
                    <Typography variant="body2">No chat history</Typography>
                </Box>
                )}
            </Box>
        </Box>
    );
    };

export { MemberChat };
