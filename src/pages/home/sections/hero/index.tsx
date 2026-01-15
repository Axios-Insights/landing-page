import { Box, Stack, Typography } from "@mui/material";
import { SectionWidget } from "@widgets";

import { SECTIONS } from "../constants";

const HeroSection = () => {
  return (
    <SectionWidget
      applyHeaderOffset
      id={SECTIONS.HERO}
      height="100vh"
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="flex-end"
      color="text.secondary"
      sx={{ backgroundColor: "primary.main" }}
    >
      <Stack direction="column" spacing={1}>
        <Typography
          fontSize={64}
          fontWeight={600}
          lineHeight={1}
          color="inherit"
        >
          The future begins <br />
          with{" "}
          <Box component="span" fontWeight={900}>
            your
          </Box>{" "}
          imagination.
        </Typography>

        <Typography fontSize={32} color="inherit" lineHeight={1}>
          Get in touch and secure your <br />
          piece of the future
        </Typography>
      </Stack>
    </SectionWidget>
  );
};

export default HeroSection;
