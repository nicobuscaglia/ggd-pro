import { AddressCard } from "../Cards";
import { Box } from "@mui/material";

const PharmacyPreview = ({ pharmacy }) => {
  if (!pharmacy) return null;
  return (
    <Box style={{ marginBottom: "4px" }}>
      <AddressCard address={pharmacy} />
    </Box>
  );
};

export { PharmacyPreview };
