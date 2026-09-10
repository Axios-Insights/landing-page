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
        isolation: "isolate",
        color: "#151515",
        backgroundColor: "#FF6E00",
        backgroundImage:
          "radial-gradient(circle at 86% 10%, rgba(250,250,250,0.19), transparent 23%), radial-gradient(circle at 9% 100%, rgba(112,57,16,0.18), transparent 31%)",
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          zIndex: -2,
          opacity: 0.13,
          backgroundImage:
            "linear-gradient(rgba(21,21,21,0.09) 1px, transparent 1px), linear-gradient(90deg, rgba(21,21,21,0.09) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "linear-gradient(90deg, transparent 2%, black 34%, black 84%, transparent)",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent 2%, black 34%, black 84%, transparent)",
        },
      }}
    >
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          zIndex: -1,
          width: { xs: 230, md: 390 },
          height: { xs: 230, md: 390 },
          right: { xs: -154, md: -174 },
          bottom: { xs: -142, md: -224 },
          border: { xs: "36px solid", md: "58px solid" },
          borderColor: "rgba(250,250,250,0.17)",
          borderRadius: "50%",
          transform: "rotate(-8deg)",
        }}
      />

      <Box
        aria-hidden
        sx={{
          position: "absolute",
          zIndex: -1,
          width: { xs: 120, md: 210 },
          height: { xs: 120, md: 210 },
          left: { xs: -86, md: -108 },
          top: { xs: 48, md: 74 },
          border: { xs: "20px solid", md: "32px solid" },
          borderColor: "rgba(21,21,21,0.075)",
          borderRightColor: "transparent",
          borderBottomColor: "transparent",
          borderRadius: "50%",
          transform: "rotate(18deg)",
        }}
      />

      <Box width="100%" maxWidth={1536} alignSelf="center">
        <Grid
          container
          spacing={{ xs: 7, md: 9 }}
          alignItems="center"
          sx={{ position: "relative", zIndex: 1 }}
        >
          <Grid size={{ xs: 12, md: 7 }}>
            <Stack gap={3.5} maxWidth={850}>
              <Stack direction="row" alignItems="center" gap={1.5}>
                <Box
                  aria-hidden
                  sx={{
                    width: 34,
                    height: 1,
                    backgroundColor: "rgba(21,21,21,0.72)",
                  }}
                />
                <Typography
                  fontSize={12}
                  fontWeight={800}
                  color="rgba(21,21,21,0.64)"
                  sx={{ letterSpacing: "0.12em" }}
                >
                  {t("pages.home.sections.get_in_touch.eyebrow")}
                </Typography>
              </Stack>

              <Typography
                component="h2"
                fontSize={{ xs: 40, md: 56 }}
                fontWeight={700}
                lineHeight={0.95}
                color="inherit"
                sx={{ textWrap: "balance" }}
              >
                {t("pages.home.sections.get_in_touch.title")}
              </Typography>

              <Typography
                color="rgba(21,21,21,0.68)"
                fontSize={{ xs: 17, md: 19 }}
                lineHeight={1.48}
                maxWidth={720}
                sx={{ letterSpacing: "-0.02em" }}
              >
                {t("pages.home.sections.get_in_touch.subtitle")}
              </Typography>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 5 }}>
            <Stack
              gap={3.5}
              sx={{
                position: "relative",
                overflow: "hidden",
                p: { xs: 3, md: 4 },
                borderRadius: "16px",
                color: "#FAFAFA",
                background:
                  "linear-gradient(145deg, rgba(35,35,35,0.98), #151515)",
                border: "1px solid rgba(250,250,250,0.09)",
                boxShadow:
                  "0 30px 48px -24px rgba(112,57,16,0.58), inset 0 1px rgba(250,250,250,0.045)",
                transition:
                  "transform 280ms cubic-bezier(.2,.8,.2,1), box-shadow 280ms ease",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow:
                    "0 38px 56px -26px rgba(112,57,16,0.68), inset 0 1px rgba(250,250,250,0.05)",
                },
                "&::after": {
                  content: '""',
                  position: "absolute",
                  width: 190,
                  height: 190,
                  right: -116,
                  top: -124,
                  border: "30px solid rgba(255,110,0,0.11)",
                  borderRadius: "50%",
                  pointerEvents: "none",
                },
              }}
            >
              <Stack gap={1.25} sx={{ position: "relative", zIndex: 1 }}>
                <Box
                  aria-hidden
                  sx={{
                    width: 44,
                    height: 3,
                    borderRadius: "4px",
                    backgroundColor: "#FF6E00",
                    boxShadow: "0 0 18px rgba(255,110,0,0.32)",
                  }}
                />
                <Typography
                  color="rgba(250,250,250,0.60)"
                  lineHeight={1.48}
                  sx={{ letterSpacing: "-0.01em" }}
                >
                  {t("pages.home.sections.get_in_touch.note")}
                </Typography>
              </Stack>

              <Stack gap={1.5} sx={{ position: "relative", zIndex: 1 }}>
                <Button
                  href={buildWhatsappLink(
                    contactPhoneNumber,
                    t("pages.home.sections.get_in_touch.whatsapp_message"),
                  )}
                  target="_blank"
                  variant="contained"
                  startIcon={<FontAwesomeIcon icon={faSquareWhatsapp} />}
                  sx={{
                    minHeight: 50,
                    justifyContent: "flex-start",
                    px: 2.5,
                    borderRadius: "8px",
                    fontWeight: 700,
                    boxShadow: "0 12px 22px -12px rgba(255,110,0,0.78)",
                    transition: "transform 180ms ease, box-shadow 180ms ease",
                    "&:hover": {
                      transform: "translateX(3px)",
                      boxShadow:
                        "0 16px 28px -12px rgba(255,110,0,0.95)",
                    },
                  }}
                >
                  {t("pages.home.sections.get_in_touch.whatsapp_cta")}
                </Button>

                <Button
                  href={`mailto:${contactEmailAddress}`}
                  variant="outlined"
                  startIcon={<FontAwesomeIcon icon={faEnvelope} />}
                  sx={{
                    minHeight: 50,
                    justifyContent: "flex-start",
                    px: 2.5,
                    color: "#FAFAFA",
                    borderColor: "rgba(250,250,250,0.20)",
                    borderRadius: "8px",
                    fontWeight: 600,
                    backgroundColor: "rgba(250,250,250,0.015)",
                    transition:
                      "transform 180ms ease, border-color 180ms ease, background-color 180ms ease",
                    "&:hover": {
                      transform: "translateX(3px)",
                      borderColor: "rgba(250,250,250,0.55)",
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
                    minHeight: 46,
                    justifyContent: "flex-start",
                    px: 2.5,
                    color: "rgba(250,250,250,0.64)",
                    borderRadius: "8px",
                    transition:
                      "transform 180ms ease, color 180ms ease, background-color 180ms ease",
                    "&:hover": {
                      transform: "translateX(3px)",
                      color: "rgba(250,250,250,0.92)",
                      backgroundColor: "rgba(250,250,250,0.035)",
                    },
                  }}
                >
                  {t("pages.home.sections.get_in_touch.phone_cta")}
                </Button>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </SectionWidget>
  );
};
