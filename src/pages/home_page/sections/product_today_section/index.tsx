import { Box, Chip, Divider, Grid, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

import { SectionWidget } from "@widgets/section_widget";

import { SECTIONS } from "../constants";

type Capability = {
  title: string;
  description: string;
};

type QueueItem = {
  title: string;
  subtitle: string;
  status: string;
};

export const ProductTodaySection = () => {
  const { t } = useTranslation();

  const capabilities = t("pages.home.sections.product_today.capabilities", {
    returnObjects: true,
  }) as Capability[];

  const queue = t("pages.home.sections.product_today.demo.queue", {
    returnObjects: true,
  }) as QueueItem[];

  const signals = t("pages.home.sections.product_today.demo.signals", {
    returnObjects: true,
  }) as string[];

  const auditItems = t("pages.home.sections.product_today.demo.audit_items", {
    returnObjects: true,
  }) as string[];

  return (
    <SectionWidget
      id={SECTIONS.PRODUCT_TODAY}
      paddingTop={{ xs: 10, md: 14 }}
      paddingBottom={{ xs: 10, md: 14 }}
      sx={{
        position: "relative",
        overflow: "hidden",
        color: "#FAFAFA",
        backgroundColor: "#151515",
        backgroundImage:
          "radial-gradient(circle at 86% 12%, rgba(255,110,0,0.16), transparent 25%), linear-gradient(rgba(250,250,250,0.026) 1px, transparent 1px), linear-gradient(90deg, rgba(250,250,250,0.026) 1px, transparent 1px)",
        backgroundSize: "auto, 48px 48px, 48px 48px",
      }}
    >
      <Box
        width="100%"
        maxWidth={1536}
        alignSelf="center"
        display="flex"
        flexDirection="column"
        gap={{ xs: 7, md: 9 }}
      >
        <Grid container spacing={{ xs: 4, md: 8 }} alignItems="flex-end">
          <Grid size={{ xs: 12, md: 7 }}>
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
                  color="#FF8034"
                  sx={{ letterSpacing: "0.12em" }}
                >
                  {t("pages.home.sections.product_today.eyebrow")}
                </Typography>
              </Stack>

              <Typography
                component="h2"
                color="inherit"
                fontSize={{ xs: 38, md: 52 }}
                fontWeight={650}
                lineHeight={0.96}
                maxWidth={900}
                sx={{ textWrap: "balance" }}
              >
                {t("pages.home.sections.product_today.title")}
              </Typography>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 5 }}>
            <Stack gap={2}>
              <Typography
                color="rgba(250,250,250,0.62)"
                fontSize={{ xs: 17, md: 18 }}
                lineHeight={1.52}
                sx={{ letterSpacing: "-0.02em" }}
              >
                {t("pages.home.sections.product_today.description")}
              </Typography>
              <Chip
                label={t("pages.home.sections.product_today.status")}
                size="small"
                sx={{
                  alignSelf: "flex-start",
                  borderRadius: "6px",
                  color: "#151515",
                  backgroundColor: "#FF8034",
                  fontWeight: 800,
                  letterSpacing: "0.05em",
                }}
              />
            </Stack>
          </Grid>
        </Grid>

        <Grid container spacing={{ xs: 4, lg: 5 }} alignItems="stretch">
          <Grid size={{ xs: 12, lg: 4 }}>
            <Grid container spacing={2} height="100%">
              {capabilities.map((capability, index) => (
                <Grid key={capability.title} size={{ xs: 12, sm: 6, lg: 12 }}>
                  <Stack
                    direction="row"
                    gap={2}
                    sx={{
                      height: "100%",
                      p: 2.5,
                      borderRadius: "12px",
                      border: "1px solid rgba(250,250,250,0.09)",
                      backgroundColor: "rgba(250,250,250,0.035)",
                      transition:
                        "transform 180ms ease, border-color 180ms ease, background-color 180ms ease",
                      "&:hover": {
                        transform: "translateX(3px)",
                        borderColor: "rgba(255,110,0,0.30)",
                        backgroundColor: "rgba(255,110,0,0.045)",
                      },
                    }}
                  >
                    <Typography
                      color="#FF8034"
                      fontSize={12}
                      fontWeight={800}
                      lineHeight={1.4}
                    >
                      0{index + 1}
                    </Typography>
                    <Stack gap={0.5}>
                      <Typography color="inherit" fontSize={17} fontWeight={650}>
                        {capability.title}
                      </Typography>
                      <Typography
                        color="rgba(250,250,250,0.50)"
                        fontSize={14}
                        lineHeight={1.4}
                      >
                        {capability.description}
                      </Typography>
                    </Stack>
                  </Stack>
                </Grid>
              ))}
            </Grid>
          </Grid>

          <Grid size={{ xs: 12, lg: 8 }}>
            <Stack
              sx={{
                position: "relative",
                overflow: "hidden",
                height: "100%",
                minHeight: { md: 610 },
                borderRadius: "16px",
                color: "#151515",
                backgroundColor: "#FAFAFA",
                border: "1px solid rgba(250,250,250,0.12)",
                boxShadow: "0 34px 56px -28px rgba(0,0,0,0.86)",
              }}
            >
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                gap={2}
                sx={{
                  px: { xs: 2.5, md: 3 },
                  py: 1.75,
                  color: "#FAFAFA",
                  backgroundColor: "#242424",
                  borderBottom: "1px solid rgba(250,250,250,0.08)",
                }}
              >
                <Stack direction="row" alignItems="center" gap={1.25}>
                  <Stack direction="row" gap={0.75}>
                    {[0, 1, 2].map((dot) => (
                      <Box
                        key={dot}
                        aria-hidden
                        sx={{
                          width: 7,
                          height: 7,
                          borderRadius: "50%",
                          backgroundColor:
                            dot === 0 ? "#FF6E00" : "rgba(250,250,250,0.18)",
                        }}
                      />
                    ))}
                  </Stack>
                  <Typography
                    fontSize={12}
                    fontWeight={700}
                    color="rgba(250,250,250,0.58)"
                    sx={{ letterSpacing: "0.06em" }}
                  >
                    {t("pages.home.sections.product_today.demo.window_label")}
                  </Typography>
                </Stack>

                <Chip
                  label={t("pages.home.sections.product_today.demo.data_label")}
                  size="small"
                  sx={{
                    borderRadius: "6px",
                    color: "#FF9E65",
                    backgroundColor: "rgba(255,110,0,0.09)",
                    border: "1px solid rgba(255,110,0,0.18)",
                    fontWeight: 750,
                  }}
                />
              </Stack>

              <Grid container sx={{ flex: 1, minHeight: 0 }}>
                <Grid size={{ xs: 12, md: 4 }}>
                  <Stack
                    height="100%"
                    gap={2}
                    sx={{
                      p: { xs: 2.5, md: 3 },
                      backgroundColor: "#F4F4F2",
                      borderRight: { md: "1px solid #E2E2E2" },
                      borderBottom: { xs: "1px solid #E2E2E2", md: "none" },
                    }}
                  >
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                      gap={2}
                    >
                      <Stack gap={0.25}>
                        <Typography fontSize={22} fontWeight={700}>
                          {t("pages.home.sections.product_today.demo.queue_title")}
                        </Typography>
                        <Typography color="#7A7A7A" fontSize={13}>
                          {t("pages.home.sections.product_today.demo.queue_subtitle")}
                        </Typography>
                      </Stack>
                      <Chip
                        label={t("pages.home.sections.product_today.demo.queue_count")}
                        size="small"
                        sx={{ borderRadius: "6px", fontWeight: 750 }}
                      />
                    </Stack>

                    <Stack gap={1.25}>
                      {queue.map((item, index) => (
                        <Stack
                          key={`${item.title}-${item.subtitle}`}
                          gap={1}
                          sx={{
                            p: 2,
                            borderRadius: "10px",
                            border:
                              index === 0
                                ? "1px solid rgba(255,110,0,0.46)"
                                : "1px solid #E2E2E2",
                            backgroundColor: index === 0 ? "#FFF5EE" : "#FAFAFA",
                            boxShadow:
                              index === 0
                                ? "inset 3px 0 #FF6E00"
                                : "none",
                          }}
                        >
                          <Stack
                            direction="row"
                            justifyContent="space-between"
                            alignItems="flex-start"
                            gap={1}
                          >
                            <Typography fontSize={15} fontWeight={650} lineHeight={1.2}>
                              {item.title}
                            </Typography>
                            <Chip
                              label={item.status}
                              size="small"
                              sx={{
                                flex: "0 0 auto",
                                height: 23,
                                borderRadius: "5px",
                                color: index === 0 ? "#151515" : "#5C5C5C",
                                backgroundColor:
                                  index === 0 ? "#FFB17A" : "#E2E2E2",
                                fontSize: 11,
                                fontWeight: 750,
                              }}
                            />
                          </Stack>
                          <Typography color="#7A7A7A" fontSize={12.5}>
                            {item.subtitle}
                          </Typography>
                        </Stack>
                      ))}
                    </Stack>
                  </Stack>
                </Grid>

                <Grid size={{ xs: 12, md: 8 }}>
                  <Stack
                    height="100%"
                    gap={2.5}
                    sx={{ p: { xs: 2.5, md: 3.5 } }}
                  >
                    <Stack
                      direction={{ xs: "column", sm: "row" }}
                      justifyContent="space-between"
                      alignItems={{ xs: "flex-start", sm: "center" }}
                      gap={2}
                    >
                      <Stack gap={0.5}>
                        <Typography
                          color="#7A7A7A"
                          fontSize={11}
                          fontWeight={800}
                          sx={{ letterSpacing: "0.09em" }}
                        >
                          {t("pages.home.sections.product_today.demo.case_label")}
                        </Typography>
                        <Typography fontSize={{ xs: 25, md: 30 }} fontWeight={700}>
                          {t("pages.home.sections.product_today.demo.case_title")}
                        </Typography>
                      </Stack>
                      <Chip
                        label={t("pages.home.sections.product_today.demo.priority")}
                        sx={{
                          borderRadius: "6px",
                          color: "#151515",
                          backgroundColor: "#FF8034",
                          fontWeight: 800,
                          letterSpacing: "0.03em",
                        }}
                      />
                    </Stack>

                    <Stack direction="row" flexWrap="wrap" gap={1}>
                      <Chip
                        label={t("pages.home.sections.product_today.demo.vehicle")}
                        variant="outlined"
                        sx={{ borderRadius: "6px" }}
                      />
                      <Chip
                        label={t("pages.home.sections.product_today.demo.journey")}
                        variant="outlined"
                        sx={{ borderRadius: "6px" }}
                      />
                      <Chip
                        label={t("pages.home.sections.product_today.demo.location")}
                        variant="outlined"
                        sx={{ borderRadius: "6px" }}
                      />
                    </Stack>

                    <Divider />

                    <Stack gap={1.5}>
                      <Typography color="#5C5C5C" fontSize={13} fontWeight={700}>
                        {t("pages.home.sections.product_today.demo.signals_label")}
                      </Typography>
                      <Grid container spacing={1.25}>
                        {signals.map((signal, index) => (
                          <Grid key={signal} size={{ xs: 12, sm: 4 }}>
                            <Stack
                              gap={1.25}
                              sx={{
                                height: "100%",
                                p: 2,
                                borderRadius: "9px",
                                border:
                                  index === 0
                                    ? "1px solid rgba(255,110,0,0.34)"
                                    : "1px solid #E2E2E2",
                                backgroundColor:
                                  index === 0 ? "#FFF5EE" : "#F4F4F2",
                              }}
                            >
                              <Box
                                aria-hidden
                                sx={{
                                  width: 8,
                                  height: 8,
                                  borderRadius: "50%",
                                  backgroundColor: index === 0 ? "#FF6E00" : "#F89E65",
                                }}
                              />
                              <Typography fontSize={14} fontWeight={650} lineHeight={1.25}>
                                {signal}
                              </Typography>
                            </Stack>
                          </Grid>
                        ))}
                      </Grid>
                    </Stack>

                    <Grid container spacing={1.5}>
                      <Grid size={{ xs: 12, sm: 5 }}>
                        <Stack
                          gap={1.5}
                          sx={{
                            height: "100%",
                            minHeight: 118,
                            p: 2.25,
                            borderRadius: "10px",
                            border: "1px solid #E2E2E2",
                            background:
                              "linear-gradient(rgba(21,21,21,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(21,21,21,0.035) 1px, transparent 1px)",
                            backgroundColor: "#FAFAFA",
                            backgroundSize: "18px 18px",
                          }}
                        >
                          <Typography color="#7A7A7A" fontSize={11} fontWeight={800}>
                            {t("pages.home.sections.product_today.demo.evidence_label")}
                          </Typography>
                          <Box
                            sx={{
                              position: "relative",
                              flex: 1,
                              borderRadius: "8px",
                              backgroundColor: "#E2E2E2",
                              overflow: "hidden",
                            }}
                          >
                            <Box
                              sx={{
                                position: "absolute",
                                left: "16%",
                                top: "20%",
                                width: "48%",
                                height: "52%",
                                border: "2px solid #FF6E00",
                                borderRadius: "40% 32% 44% 34%",
                                transform: "rotate(-7deg)",
                              }}
                            />
                            <Box
                              sx={{
                                position: "absolute",
                                right: "13%",
                                bottom: "18%",
                                width: 9,
                                height: 9,
                                borderRadius: "50%",
                                backgroundColor: "#151515",
                                boxShadow: "0 0 0 5px rgba(21,21,21,0.08)",
                              }}
                            />
                          </Box>
                        </Stack>
                      </Grid>

                      <Grid size={{ xs: 12, sm: 7 }}>
                        <Stack
                          gap={1}
                          sx={{
                            height: "100%",
                            p: 2.25,
                            borderRadius: "10px",
                            border: "1px solid rgba(255,110,0,0.42)",
                            backgroundColor: "#FFF1E8",
                            boxShadow: "inset 3px 0 #FF6E00",
                          }}
                        >
                          <Typography
                            color="#C65500"
                            fontSize={11}
                            fontWeight={800}
                            sx={{ letterSpacing: "0.08em" }}
                          >
                            {t("pages.home.sections.product_today.demo.action_label")}
                          </Typography>
                          <Typography fontSize={17} fontWeight={650} lineHeight={1.3}>
                            {t("pages.home.sections.product_today.demo.action")}
                          </Typography>
                          <Typography color="#7A7A7A" fontSize={13} lineHeight={1.35}>
                            {t("pages.home.sections.product_today.demo.action_detail")}
                          </Typography>
                        </Stack>
                      </Grid>
                    </Grid>

                    <Stack direction="row" flexWrap="wrap" gap={1} mt="auto">
                      {auditItems.map((item) => (
                        <Chip
                          key={item}
                          label={item}
                          size="small"
                          sx={{
                            borderRadius: "6px",
                            color: "#5C5C5C",
                            backgroundColor: "#F4F4F2",
                            border: "1px solid #E2E2E2",
                          }}
                        />
                      ))}
                    </Stack>
                  </Stack>
                </Grid>
              </Grid>
            </Stack>

            <Typography
              color="rgba(250,250,250,0.42)"
              fontSize={12.5}
              lineHeight={1.4}
              mt={1.5}
            >
              {t("pages.home.sections.product_today.demo.note")}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </SectionWidget>
  );
};
