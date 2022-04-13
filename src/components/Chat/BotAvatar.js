import { Avatar as MuiAvatar } from "@material-ui/core";

const AMY_AVATAR_IMAGE =
  "https://ggd-static-resource-bucket-dev.s3.us-east-2.amazonaws.com/images/amyGGD.jpg";

const BotAvatar = ({ url = AMY_AVATAR_IMAGE }) => {
  return <MuiAvatar src={url} />;
};

export { BotAvatar };
