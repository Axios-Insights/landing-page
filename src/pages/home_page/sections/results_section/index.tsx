import { CardContent, Stack, Typography } from "@mui/material";

import { SectionWidget } from "@widgets/section_widget";
import { SpotlightCardWidget } from "@widgets/spotlight_card";

import { SECTIONS } from "../constants";

export const ResultsSection = () => {
  return (
    <SectionWidget
      id={SECTIONS.RESULTS}
      justifyContent="center"
      alignItems="center"
      gap={4}
    >
      <Typography fontSize={32} fontWeight={700} color="inherit">
        Resultados que transformam operações
      </Typography>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        gap={8}
      >
        <SpotlightCardWidget sx={{ padding: 8 }}>
          <CardContent>1</CardContent>
        </SpotlightCardWidget>

        <SpotlightCardWidget sx={{ padding: 8 }}>
          <CardContent>2</CardContent>
        </SpotlightCardWidget>

        <SpotlightCardWidget sx={{ padding: 8 }}>
          <CardContent>3</CardContent>
        </SpotlightCardWidget>

        <SpotlightCardWidget sx={{ padding: 8 }}>
          <CardContent>4</CardContent>
        </SpotlightCardWidget>

        <SpotlightCardWidget sx={{ padding: 8 }}>
          <CardContent>5</CardContent>
        </SpotlightCardWidget>
      </Stack>
    </SectionWidget>
  );
};
