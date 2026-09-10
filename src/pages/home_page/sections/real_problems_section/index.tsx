import { Box, Chip, Grid, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

import { SectionWidget } from "@widgets/section_widget";

import { SECTIONS } from "../constants";

type ObservedProblem = {
  eyebrow: string;
  title: string;
  description: string;
  tag: string;
};

export const RealProblemsSection = () => {
  const { t } = useTranslation();

  const cards = t("pages.home.sections.real_problems.cards", {
    returnObjects: true,
  }) as ObservedProblem[];

  return (
    <SectionWidget
      id={SECTIONS.REAL_PROBLEMS}
      paddingTop={{ xs: 10, md: 14 }}
      paddingBottom={{ xs: 10, md: 14 }}
      sx={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#F4F4F2",
        backgroundImage:
          "radial-gradient(circle at 88% 12%, rgba(255,110,0,0.07), transparent 24%)",
      }}
    >
      <Box
        width="100%"
        maxWidth={1536}
        alignSelf="center"
        display="flex"
        flexDirection="column"
        gap={{ xs: 6, md: 8 }}
      >
        <Grid container spacing={{ xs: 4, md: 8 }} alignItems="flex-end">
          <Grid size={{ xs: 12, md: 8 }}>
            <Stack gap={2.5}>
              <Stack direction="row" alignItems="center" gap={1.5}>
                <Box
                  aria-hidden
                  sx={{ width: 34, height: "1px", backgroundColor: "#FF6E00" }}
                />
                <Typography
                  component="p"
                  fontSize={12}
                  fontWeight={800}
                  color="#C65500"
                  sx={{ letterSpacing: "0.12em" }}
                >
                  {t("pages.home.sections.real_problems.eyebrow")}
                </Typography>
              </Stack>

              <Typography
                component="h2"
                fontSize={{ xs: 36, md: 48 }}
                fontWeight={600}
                lineHeight={0.98}
                maxWidth={930}
                sx={{ textWrap: "balance" }}
              >
                {t("pages.home.sections.real_problems.title")}
              </Typography>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Typography
              color="#5C5C5C"
              fontSize={{ xs: 17, md: 18 }}
              lineHeight={1.55}
              sx={{ letterSpacing: "-0.02em" }}
            >
              {t("pages.home.sections.real_problems.description")}
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={{ xs: 2, md: 3 }} alignItems="stretch">
          {cards.map((card, index) => {
            const highlighted = index === 1;

            return (
              <Grid key={card.title} size={{ xs: 12, md: 4 }}>
                <Stack
                  gap={3}
                  sx={{
                    position: "relative",
                    overflow: "hidden",
                    height: "100%",
                    minHeight: { md: 300 },
                    p: { xs: 3.5, md: 4 },
                    borderRadius: "16px",
                    color: highlighted ? "#FAFAFA" : "#151515",
                    backgroundColor: highlighted ? "#151515" : "#FAFAFA",
                    border: highlighted
                      ? "1px solid rgba(21,21,21,0.98)"
                      : "1px solid #E2E2E2",
                    boxShadow: highlighted
                      ? "0 28px 44px -30px rgba(0,0,0,0.78)"
                      : "0 14px 26px -22px rgba(0,0,0,0.34)",
                    transition:
                      "transform 240ms cubic-bezier(.2,.8,.2,1), border-color 240ms ease, box-shadow 240ms ease",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      borderColor: highlighted
                        ? "rgba(255,110,0,0.38)"
                        : "rgba(255,110,0,0.28)",
                      boxShadow: highlighted
                        ? "0 34px 54px -30px rgba(0,0,0,0.88)"
                        : "0 24px 36px -26px rgba(112,57,16,0.42)",
                    },
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      inset: "0 auto auto 0",
                      width: highlighted ? "62%" : "38%",
                      height: 3,
                      backgroundColor: "#FF6E00",
                      opacity: highlighted ? 1 : 0.68,
                    },
                  }}
                >
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    gap={2}
                  >
                    <Typography
                      color={highlighted ? "#FF8034" : "#C65500"}
                      fontSize={12}
                      fontWeight={800}
                      sx={{ letterSpacing: "0.10em" }}
                    >
                      {card.eyebrow}
                    </Typography>
                    <Typography
                      color={
                        highlighted
                          ? "rgba(250,250,250,0.28)"
                          : "rgba(21,21,21,0.18)"
                      }
                      fontSize={34}
                      fontWeight={800}
                      lineHeight={1}
                    >
                      0{index + 1}
                    </Typography>
                  </Stack>

                  <Stack gap={2}>
                    <Typography
                      color="inherit"
                      fontSize={{ xs: 27, md: 30 }}
                      fontWeight={650}
                      lineHeight={1.02}
                      sx={{ textWrap: "balance" }}
                    >
                      {card.title}
                    </Typography>
                    <Typography
                      color={
                        highlighted
                          ? "rgba(250,250,250,0.62)"
                          : "#5C5C5C"
                      }
                      fontSize={16}
                      lineHeight={1.5}
                      sx={{ letterSpacing: "-0.015em" }}
                    >
                      {card.description}
                    </Typography>
                  </Stack>

                  <Box mt="auto">
                    <Chip
                      label={card.tag}
                      size="small"
                      sx={{
                        borderRadius: "6px",
                        color: highlighted ? "#151515" : "#FAFAFA",
                        backgroundColor: highlighted ? "#FF8034" : "#151515",
                        fontWeight: 750,
                        letterSpacing: "0.04em",
                      }}
                    />
                  </Box>
                </Stack>
              </Grid>
            );
          })}
        </Grid>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          alignItems={{ xs: "flex-start", sm: "center" }}
          gap={1.5}
          sx={{
            p: 2.5,
            borderRadius: "12px",
            border: "1px solid #E2E2E2",
            backgroundColor: "rgba(250,250,250,0.70)",
          }}
        >
          <Chip
            label={t("pages.home.sections.real_problems.note_label")}
            size="small"
            sx={{ borderRadius: "6px", fontWeight: 750 }}
          />
          <Typography color="#5C5C5C" fontSize={14} lineHeight={1.4}>
            {t("pages.home.sections.real_problems.note")}
          </Typography>
        </Stack>
      </Box>
    </SectionWidget>
  );
};
