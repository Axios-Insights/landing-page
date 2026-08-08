import { Button, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";

import { HeaderWidget } from "@widgets/header_widget";
import { LanguageSwitcherWidget } from "@widgets/language_switcher_widget";
import { LayoutWidget } from "@widgets/layout_widget";
import { LogoWidget } from "@widgets/logo_widget";

import { AboutUsSection } from "./sections/about_us_section";
import { SECTIONS } from "./sections/constants";
import { GetInTouchSection } from "./sections/get_in_touch_section";
import { HeroSection } from "./sections/hero_section";
import { ResultsSection } from "./sections/results_section";
import { UseCasesSection } from "./sections/use_cases_section";

export const HomePage = () => {
  const { t } = useTranslation();

  return (
    <LayoutWidget>
      <HeaderWidget
        sx={{
          top: { xs: 8, md: 12 },
          left: "50%",
          width: "calc(100% - 24px)",
          maxWidth: 1536,
          transform: "translateX(-50%)",
          color: "#FAFAFA",
          backgroundColor: "rgba(21,21,21,0.76)",
          border: "1px solid rgba(250,250,250,0.10)",
          borderRadius: "16px",
          boxShadow:
            "0 16px 32px -18px rgba(0,0,0,0.78), inset 0 1px rgba(250,250,250,0.045)",
          backdropFilter: "blur(18px) saturate(135%)",
          overflow: "hidden",
          "&::before": {
            display: "none",
          },
          "&::after": {
            content: '""',
            position: "absolute",
            left: "12%",
            right: "12%",
            bottom: 0,
            height: 1,
            opacity: 0.6,
            background:
              "linear-gradient(90deg, transparent, rgba(255,110,0,0.72), transparent)",
            pointerEvents: "none",
          },
          "& .MuiToolbar-root": {
            minHeight: { xs: 58, md: 62 },
            padding: { xs: "12px 16px", md: "12px 20px" },
          },
        }}
        brand={
          <Button
            component={Link}
            variant="clear"
            to={{
              hash: SECTIONS.HERO,
            }}
            sx={{
              transition: "transform 180ms ease",
              "&:hover": {
                transform: "translateY(-1px)",
              },
            }}
          >
            <LogoWidget
              fontSize={26}
              sx={{
                "& b": {
                  color: "#FF6E00",
                  fontWeight: 800,
                },
              }}
            />
          </Button>
        }
        navigation={[
          SECTIONS.ABOUT_US,
          SECTIONS.RESULTS,
          SECTIONS.GET_IN_TOUCH,
        ].map((value, index) => {
          const isContact = value === SECTIONS.GET_IN_TOUCH;

          return (
            <Button
              key={index}
              component={Link}
              variant={isContact ? "contained" : "clear"}
              to={{
                hash: value,
              }}
              sx={
                isContact
                  ? {
                      minHeight: 38,
                      px: 2.25,
                      borderRadius: "8px",
                      fontWeight: 700,
                      boxShadow: "0 8px 18px -10px rgba(255,110,0,0.75)",
                      transition:
                        "transform 180ms ease, box-shadow 180ms ease, background-color 180ms ease",
                      "&:hover": {
                        transform: "translateY(-2px)",
                        boxShadow:
                          "0 12px 22px -10px rgba(255,110,0,0.92)",
                      },
                    }
                  : {
                      position: "relative",
                      py: 1,
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        left: "50%",
                        bottom: 2,
                        width: 0,
                        height: 1,
                        backgroundColor: "#FF6E00",
                        transform: "translateX(-50%)",
                        transition: "width 180ms ease",
                      },
                      "&:hover::after": {
                        width: "72%",
                      },
                    }
              }
            >
              <Typography color="inherit" fontWeight={isContact ? 650 : 500}>
                {t(`pages.home.header.navigation.${value.replaceAll("-", "_")}`)}
              </Typography>
            </Button>
          );
        })}
        actions={<LanguageSwitcherWidget />}
      />

      <HeroSection />

      <AboutUsSection />

      <UseCasesSection />

      <ResultsSection />

      <GetInTouchSection />
    </LayoutWidget>
  );
};
