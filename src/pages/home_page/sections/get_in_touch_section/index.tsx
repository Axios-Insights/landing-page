import { faSquareWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faSquarePhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

import { SectionWidget } from "@widgets/section_widget";

import { buildPhoneLink, buildWhatsappLink } from "@utils/contact_util";

import { SECTIONS } from "../constants";

import { contactEmailAddress, contactPhoneNumber } from "./constants";

export const GetInTouchSection = () => {
  const { t } = useTranslation();

  return (
    <SectionWidget
      id={SECTIONS.GET_IN_TOUCH}
      paddingTop={{ xs: 10, md: 14 }}
      paddingBottom={{ xs: 10, md: 14 }}
      sx={{
        position: "relative",
        overflow: "hidden",
        color: "#151515",
        backgroundColor: "#FF6E00",
        backgroundImage:
          "radial-gradient(circle at 85% 10%, rgba(250,250,250,0.22), transparent 24%), radial-gradient(circle at 10% 100%, rgba(112,57,16,0.18), transparent 30%)",
      }}
    >
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          width: { xs: 220, md: 360 },
          height: { xs: 220, md: 360 },
          right: { xs: -150, md: -170 },
          bottom: { xs: -140, md: -210 },
          border: { xs: "36px solid", md: "56px solid" },
          borderColor: "rgba(250,250,250,0.18)",
          borderRadius: "50%",
        }}
      />

      <Grid
        container
        spacing={{ xs: 6, md: 8 }}
        alignItems="center"
        sx={{ position: "relative", zIndex: 1 }}
      >
        <Grid size={{ xs: 12, md: 7 }}>
          <Stack gap={3} maxWidth={850}>
            <Typography
              fontSize={12}
              fontWeight={800}
              color="rgba(21,21,21,0.62)"
              sx={{ letterSpacing: "0.12em" }}
            >
              {t("pages.home.sections.get_in_touch.eyebrow")}
            </Typography>

            <Typography
              component="h2"
              fontSize={{ xs: 40, md: 56 }}
              fontWeight={700}
              lineHeight={0.98}
              color="inherit"
            >
              {t("pages.home.sections.get_in_touch.title")}
            </Typography>

            <Typography
              color="rgba(21,21,21,0.68)"
              fontSize={{ xs: 17, md: 19 }}
              lineHeight={1.45}
              maxWidth={720}
              sx={{ letterSpacing: "-0.02em" }}
            >
              {t("pages.home.sections.get_in_touch.subtitle")}
            </Typography>
          </Stack>
        </Grid>

        <Grid size={{ xs: 12, md: 5 }}>
          <Stack
            gap={3}
            sx={{
              p: { xs: 3, md: 4 },
              borderRadius: "16px",
              color: "#FAFAFA",
              backgroundColor: "#151515",
              boxShadow: "0 24px 36px -1px rgba(112,57,16,0.28)",
            }}
          >
            <Typography
              color="rgba(250,250,250,0.60)"
              lineHeight={1.45}
              sx={{ letterSpacing: "-0.01em" }}
            >
              {t("pages.home.sections.get_in_touch.note")}
            </Typography>

            <Stack gap={1.5}>
              <Button
                href={buildWhatsappLink(
                  contactPhoneNumber,
                  t("pages.home.sections.get_in_touch.whatsapp_message"),
                )}
                target="_blank"
                variant="contained"
                startIcon={<FontAwesomeIcon icon={faSquareWhatsapp} />}
                sx={{
                  minHeight: 48,
                  justifyContent: "flex-start",
                  px: 2.5,
                  borderRadius: "8px",
                  fontWeight: 700,
                }}
              >
                {t("pages.home.sections.get_in_touch.whatsapp_cta")}
              </Button>

              <Button
                href={`mailto:${contactEmailAddress}`}
                variant="outlined"
                startIcon={<FontAwesomeIcon icon={faEnvelope} />}
                sx={{
                  minHeight: 48,
                  justifyContent: "flex-start",
                  px: 2.5,
                  color: "#FAFAFA",
                  borderColor: "rgba(250,250,250,0.22)",
                  borderRadius: "8px",
                  fontWeight: 600,
                  "&:hover": {
                    borderColor: "rgba(250,250,250,0.65)",
                    backgroundColor: "rgba(250,250,250,0.04)",
                  },
                }}
              >
                {t("pages.home.sections.get_in_touch.email_cta")}
              </Button>

              <Button
                href={buildPhoneLink(contactPhoneNumber)}
                variant="text"
                startIcon={<FontAwesomeIcon icon={faSquarePhone} />}
                sx={{
                  minHeight: 44,
                  justifyContent: "flex-start",
                  px: 2.5,
                  color: "rgba(250,250,250,0.66)",
                  borderRadius: "8px",
                }}
              >
                {t("pages.home.sections.get_in_touch.phone_cta")}
              </Button>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </SectionWidget>
  );
};
