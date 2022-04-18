import { useState } from "react"
import {
  Box,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CircleIcon from "@mui/icons-material/Circle";
import { MemberChat } from "../Chat";

const ProviderAccordion = ({ data }) => {
  const [expanded, setExpanded] = useState(0);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const TextDetails = ({details}) => {
      const { title, value } = details
      return (
        <Box display="flex">
            {title &&
            <Typography sx={{ width: "40%", flexShrink: 0 }}>
                {title}
            </Typography>
            }
            {value &&
            <Typography sx={{ color: "text.secondary" }}>
                {value}
            </Typography>
            }
        </Box>
      );
  }

    const ListDetails = ({ details }) => {
        const { value } = details;
        return value.map((item, index) => {
          return (
            <Box key={index} display="flex" alignItems="center">
              <CircleIcon sx={{ fontSize: "0.5rem", marginRight: "0.5rem" }} />
              <Typography>{item.name}</Typography>
            </Box>
          );
        });
    };

  const Details = ({ details }) => {    
        switch (details.type) {
          case "text":
            return <TextDetails details={details} />;
          case "list":
            return <ListDetails details={details} />;
          case "chat":
            return (
              <Box style={{ maxHeight: "12rem", overflow: "scroll", backgroundColor: '#fff', padding: '0 0.2rem' }}>
                <MemberChat conversation={details.value} />
              </Box>
            );
          default:
            return null;
        }
  }

  if (!data) {
      return;
  }

  return (
    <div>
      {data.map((item, index) => {
          return (
            <Accordion
              key={index}
              expanded={expanded === index}
              onChange={handleChange(index)}
              style={expanded === index ? { border: "1px solid #FAFAFB" } : null}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${index}-content`}
                id={`panel${index}-header`}
                style={
                  expanded === index ? { borderBottom: '1px solid #E2E2E2' } : null
                }
              >
                <Typography
                  variant="subtitle2"
                  sx={{ width: "50%", flexShrink: 0 }}
                >
                  {item.title}
                </Typography>
                {item.subTitle && (
                  <Typography sx={{ color: "text.secondary" }}>
                    {item.subTitle}
                  </Typography>
                )}
              </AccordionSummary>
              {item.data.map((details, index) => {
                return (
                  <AccordionDetails key={index}>
                    <Details details={details} />
                  </AccordionDetails>
                );
              })}
            </Accordion>
          );
        })
        }
    </div>
  );
};

export { ProviderAccordion };
