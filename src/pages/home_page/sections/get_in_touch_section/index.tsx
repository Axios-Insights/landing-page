import { Stack, Typography, useTheme } from "@mui/material";
import { Trans, useTranslation } from "react-i18next";

import { SectionWidget } from "@widgets/section_widget";
import { SpotlightCardWidget } from "@widgets/spotlight_card";

import { SECTIONS } from "../constants";

export const GetInTouchSection = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <SectionWidget id={SECTIONS.GET_IN_TOUCH}>
      <SpotlightCardWidget
        variant="outlined"
        spotlightColor={theme.palette.primary.contrastText}
        sx={{
          alignSelf: "center",
          display: "flex",
          flexDirection: "column",
          width: "fit-content",
          backgroundColor: "primary.main",
          color: "primary.contrastText",
          padding: 8,
        }}
      >
        <Stack gap={4}>
          <Stack gap={1} textAlign="center">
            <Typography fontSize={32} fontWeight={500} color="inherit">
              {t("pages.home.sections.get_in_touch.title")}
            </Typography>
            <Typography fontWeight={500} color="inherit">
              <Trans i18nKey="pages.home.sections.get_in_touch.subtitle" />
            </Typography>
          </Stack>

          {/* <Box alignSelf="center">
            <Button variant="contained">
              <Typography color="text.secondary" fontSize={24} fontWeight={600}>
                Entre em contato
              </Typography>
            </Button>
          </Box> */}
        </Stack>
      </SpotlightCardWidget>
    </SectionWidget>
  );
};
