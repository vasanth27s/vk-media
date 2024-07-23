import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
        <Typography color={medium}>Create Ad</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="http://localhost:3001/assets/info4.jpeg" // Update URL here
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>I Phone</Typography>
        <Typography color={medium}>https://www.apple.com/in/store</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
      iPhone represents a fusion of style and technology, showcasing a sleek design that stands out in the smartphone market. With its high-resolution display, advanced camera system, and robust performance, it delivers an exceptional user experience. The iPhone's seamless integration with iOS ensures smooth operation and access to a vast array of apps and services.
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
