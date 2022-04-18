import { Box, Typography } from "@mui/material";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";

const UserPdfPreview = ({ file, name }) => {
  return (
    <Box p={2}>
      <object
        data={file}
        type="application/pdf"
        width="100%"
        height="100%"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <PictureAsPdfIcon style={{ fontSize: "4rem", marginBottom: "1rem" }} />
        {name && (
          <Typography variant="body2" align="center">
            {name}
          </Typography>
        )}
      </object>
    </Box>
  );
};

export { UserPdfPreview };
