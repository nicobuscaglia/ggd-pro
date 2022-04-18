import {
  Grid,
  Box,
//   IconButton,
//   SvgIcon,
  Paper,
} from "@mui/material";
import { makeStyles } from "@mui/styles"
import { DataGrid } from "../Common";
// import { Marker } from "react-map-gl";
// import Geocoding from "@mapbox/mapbox-sdk/services/geocoding";

const DATA_MAPPING = {
  label: false,
  name: {
    renderFn: (name) => name,
    style: "subtitle2",
  },
  address: {
    renderFn: (address) =>
      Object.keys(address)
        .map((key) => (key === "line" ? address[key].join(", ") : address[key]))
        .join(", "),
    style: "body2",
    color: "textSecondary",
  },
  telecom: {
    label: "phone:",
    renderFn: (telecom) =>
      telecom
        .filter((result) => result.system === "phone")
        .map((result) => result.value)
        .join(", "),
    style: "body2",
    color: "textSecondary",
  },
};

// const DEFAULT_MAP_CONFIG = {
//   latitude: 32.779167,
//   longitude: -96.808891,
//   zoom: 8,
// };

const useClasses = makeStyles((theme) => ({
  selectedContainer: {
    backgroundColor: "rgba(30,117,255,0.1)",
  },
  iconButton: {
    position: "relative",
  },
  locationPin: {
    fill: theme.palette.primary.main,
  },
}));

const AddressCard = ({ address, selected, outline = true }) => {
  const classes = useClasses();
//   const [mapConfig, setMapConfig] = useState(DEFAULT_MAP_CONFIG);

//   const geocodingClient = Geocoding({
//     accessToken: process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN,
//   });

//   useEffect(() => {
//     geocodingClient
//       .forwardGeocode({
//         query: Object.values(address.address).join(","),
//         limit: 1,
//       })
//       .send()
//       .then((response) => {
//         const { body } = response;
//         const { features = [] } = body;
//         const [location] = features;
//         if (location && Array.isArray(location.center)) {
//           const [lng, lat] = location.center;
//           setMapConfig({
//             latitude: lat,
//             longitude: lng,
//           });
//         }
//       });
//   }, []);

  return (
    <Paper
      variant={outline ? "outlined" : "elevation"}
      className={selected ? classes.selectedContainer : ""}
    >
      <Box p={1}>
        <Grid container direction="row" alignItems="center" spacing={1}>
          {/* <Grid item>
            <MapboxMap {...mapConfig} scrollZoom={false}>
              <Marker
                key="marker-location"
                latitude={mapConfig.latitude}
                longitude={mapConfig.longitude}
                offsetTop={-24}
                offsetLeft={-28}
              >
                <IconButton className={classes.iconButton}>
                  <SvgIcon fontSize="small">
                    <svg
                      className={classes.locationPin}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 25 35"
                    >
                      <path d="M12.5 0C5.59 0 0 5.627 0 12.584c0 7.496 7.893 17.832 11.143 21.769a1.765 1.765 0 002.732 0C17.107 30.416 25 20.08 25 12.583 25 5.628 19.41 0 12.5 0z" />
                      <ellipse
                        cx="12.5"
                        cy="12.583"
                        rx="8.553"
                        ry="8.61"
                        fill="#fff"
                      />
                    </svg>
                  </SvgIcon>
                </IconButton>
              </Marker>
            </MapboxMap>
          </Grid> */}
          <Grid item xs>
            <DataGrid data={address} dataMapping={DATA_MAPPING} />
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};

export { AddressCard };
