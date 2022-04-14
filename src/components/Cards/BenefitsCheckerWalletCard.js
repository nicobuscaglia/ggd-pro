import { getFormattedDateTimeString } from "../utils";
import { Paper, Box, Typography, Grid } from "@material-ui/core";

const MOCK_DATA = {
  dateOfRequest: "03/24/22",
  deductible: {
    yearToDate: 3500,
    remaining: 5000,
  },
  oopMax: {
    yearToDate: 5000,
    remaining: 10000,
  },
};

const hasActiveCoverage = (data) => {
  const { deductible = {}, oopMax = {} } = data;

  return Boolean(
    deductible &&
      deductible.yearToDate &&
      deductible.remaining &&
      oopMax &&
      oopMax.yearToDate &&
      oopMax.remaining
  );
};

const BenefitsCheckerWalletCard = () => {
  return (
    <Box p={2}>
      <Paper variant="outlined" style={{ backgroundColor: "#FAFAFB" }}>
        <Box p={2}>
          <Typography variant="subtitle1" style={{ color: "#696974" }}>
            Benefits Checker
          </Typography>
          <Box
            p={2}
            style={{ backgroundColor: "#fff", borderRadius: 10 }}
            mt={2}
          >
            <Typography
              paragraph
              align="center"
              variant="subtitle1"
              style={{ color: "#696974" }}
            >
              Benefit Status
            </Typography>
            {hasActiveCoverage(MOCK_DATA) ? (
              <Grid container justifyContent="center" spacing={2}>
                <Grid item xs={6}>
                  <Box
                    style={{ backgroundColor: "#f1f1f1", borderRadius: 10 }}
                    p={2}
                    textAlign="center"
                  >
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      style={{ fontWeight: 500 }}
                    >
                      DEDUCTIBLE
                    </Typography>
                    <Typography>
                      ${MOCK_DATA.deductible.yearToDate}/$
                      {MOCK_DATA.deductible.remaining}
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box
                    style={{ backgroundColor: "#f1f1f1", borderRadius: 10 }}
                    p={2}
                    textAlign="center"
                  >
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      style={{ fontWeight: 500 }}
                    >
                      OOPMAX
                    </Typography>
                    <Typography>
                      ${MOCK_DATA.oopMax.yearToDate}/$
                      {MOCK_DATA.oopMax.remaining}
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            ) : (
              <Typography variant="body2" color="error" align="center">
                Inactive coverage
              </Typography>
            )}
          </Box>
          <Box mt={2}>
            <Typography variant="subtitle2" color="textSecondary">
              DATE OF REQUEST
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {getFormattedDateTimeString("2022-03-25", "short")}
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export { BenefitsCheckerWalletCard };
