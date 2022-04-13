import { AddressCard } from "../Cards";
import { Box } from "@material-ui/core";

const PharmacyPreview = ({ pharmacy }) => {
  if (!pharmacy) return null;
  return (
    <Box style={{ marginBottom: "4px" }}>
      <AddressCard address={pharmacy} />
    </Box>
  );
};

export { PharmacyPreview };
