import { faSquareWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faSquarePhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconButton, Stack, Typography, useTheme } from "@mui/material";
import { Trans, useTranslation } from "react-i18next";

import { SectionWidget } from "@widgets/section_widget";
import { SpotlightCardWidget } from "@widgets/spotlight_card";

import { buildPhoneLink, buildWhatsappLink } from "@utils/contact_util";

import { SECTIONS } from "../constants";

import { contactEmailAddress, contactPhoneNumber } from "./constants";

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

          <Stack alignSelf="center" flexDirection="row" gap={2}>
            <IconButton
              href={buildWhatsappLink(
                contactPhoneNumber,
                t("pages.home.sections.get_in_touch.whatsapp_message"),
              )}
              target="_blank"
              color="inherit"
            >
              <FontAwesomeIcon icon={faSquareWhatsapp} fontSize={64} />
            </IconButton>
            <IconButton
              href={buildPhoneLink(contactPhoneNumber)}
              target="_blank"
              color="inherit"
            >
              <FontAwesomeIcon icon={faSquarePhone} fontSize={64} />
            </IconButton>
            <IconButton href={`mailto:${contactEmailAddress}`} color="inherit">
              <FontAwesomeIcon icon={faEnvelope} fontSize={56} />
            </IconButton>
          </Stack>
        </Stack>
      </SpotlightCardWidget>
    </SectionWidget>
  );
};
