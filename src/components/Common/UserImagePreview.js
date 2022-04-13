import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
// import { getUserImage } from "../../events";
import { GGDLoader } from "./GGDLoader";

const UserImagePreview = ({ imagePath, imageBase64, attachmentId }) => {
  const [image, setImage] = useState(imageBase64);
  const blurImage =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mMsVAYAAQsAlgeKyEAAAAAASUVORK5CYII=";

//   useEffect(() => {
//     if (!image) {
//       getUserImage(
//         (_, url) => {
//           setImage(url);
//         },
//         { imagePath: attachmentId || imagePath }
//       );
//     }
//   }, []);

  return (
    <Grid item style={{ padding: "8px" }}>
      {!image && <GGDLoader />}
      {image && (
        <img
          src={image}
          alt="Preview"
          width={460}
          height={360}
          objectFit="contain"
          objectPosition="right"
        />
      )}
    </Grid>
  );
};

export { UserImagePreview };
