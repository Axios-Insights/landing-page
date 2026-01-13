import {
  AppBar,
  Box,
  Button,
  Toolbar,
  Typography,
  useScrollTrigger,
} from "@mui/material";

import type { HeaderWidgetPropsType } from "./types";

const HeaderWidget = ({
  sx,
  scrollThreshold = 10,
  ...props
}: HeaderWidgetPropsType) => {
  const triggered = useScrollTrigger({
    disableHysteresis: true,
    threshold: scrollThreshold,
  });

  const navItems = [
    "Services",
    "Use Cases",
    "About Us",
    "EN PT",
    "Get in touch",
  ];

  return (
    <AppBar
      elevation={triggered ? 4 : 0}
      position="fixed"
      sx={{
        backgroundColor: triggered
          ? "rgba(255, 255, 255, 0.25)"
          : "transparent",
        backgroundFiler: triggered ? "blur(10px)" : "none",
        transition: "all 0.3s ease-in-out",
        boxShadow: "none",
        ...sx,
      }}
      {...props}
    >
      <Toolbar
        disableGutters
        sx={{
          padding: "32px 32px 0px 32px",
          minHeight: "auto",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Button //! Componentize
          variant="text"
          sx={{
            backgroundColor: "peru",
            padding: 0,
            minWidth: 0,
            background: "none",
            border: "none",
            color: "inherit",
            "&:hover": {
              background: "none",
              opacity: 0.8,
            },
          }}
        >
          <Typography
            sx={{
              flexGrow: 1,
              color: "text.secondary",
              fontSize: "24px",
            }}
          >
            <b>axios</b> insights
          </Typography>
        </Button>

        <Box>
          {navItems.map((item) => (
            <Button key={item} sx={{ color: "#fff" }}>
              {item}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderWidget;
