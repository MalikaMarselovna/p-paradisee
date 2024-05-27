import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, .125, .125)",
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <div className="accor-shadow flex flex-col justify-center border-[2px] border-[#f92e9e] overflow-hidden rounded-[10px]">
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography className="text-[#f92e9e]">What material are your toys made of?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Our toys are made from hypoallergenic yarn that does not contain
              harmful chemicals or dyes. This makes them safe for children and
              adults with sensitive skin.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <Typography className="text-[#f92e9e]">Are your toys suitable for newborns?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Yes, our toys are absolutely safe for newborns. We use only high
              quality and safe materials that have passed strict quality checks.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography className="text-[#f92e9e]">How to care for knitted toys?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              We recommend hand washing in warm water with a mild detergent.
              Avoid machine drying and spinning to maintain the shape and
              quality of the product. Dry toys on a flat surface, away from
              direct sunlight.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <Typography className="text-[#f92e9e]">Is it possible to order a custom toy?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Yes, we accept orders for custom toys. You can choose the color,
              size and design. Contact us to discuss details and deadlines.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel5"}
          onChange={handleChange("panel5")}
        >
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <Typography className="text-[#f92e9e]">How long to wait for an order?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              The production and delivery time depends on the complexity of the
              order and the current workload. It usually takes 5 to 10 business
              days to complete an order. You can check the exact timing when
              placing your order.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel6"}
          onChange={handleChange("panel6")}
        >
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <Typography className="text-[#f92e9e]">What payment methods do you accept?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              We accept payment by bank cards, electronic money and bank
              transfer. You will find detailed information about payment methods
              on the checkout page.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel7"}
          onChange={handleChange("panel7")}
        >
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <Typography className="text-[#f92e9e]"> How is delivery made?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              We offer several delivery options: courier delivery, postal
              delivery and pickup from our store. When placing an order, you can
              choose the method most convenient for you.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel8"}
          onChange={handleChange("panel8")}
        >
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <Typography className="text-[#f92e9e]">Can I return or exchange a toy?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Yes, you can return or exchange a toy within 14 days of receipt if
              it has not been used and is in its original condition. Please
              contact us to arrange a return or exchange.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel10"}
          onChange={handleChange("panel10")}
        >
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <Typography className="text-[#f92e9e]">
              How can I find out about new products and promotions?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Subscribe to our newsletter or follow our pages on social networks
              to stay up to date with all the new products and special offers.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}
