import { Box } from "@mui/material";
import { HeaderWidget, LayoutWidget } from "@widgets";
// import { Button } from "@mui/material";
// import { useTranslation } from "react-i18next";

const HomePage = () => {
  // const { t, i18n } = useTranslation();

  return (
    <LayoutWidget>
      <HeaderWidget />

      <Box sx={{ height: "100vh", backgroundColor: "primary.main" }}>ABC</Box>

      <Box sx={{ p: 2, bgcolor: "grey.200" }}>Footer</Box>

      {/* <div style={{ display: "flex", flexDirection: "column" }}>
        <Button onClick={() => i18n.changeLanguage("en")}>
          {t("languages.english")}
        </Button>
        <Button onClick={() => i18n.changeLanguage("es")}>
          {t("languages.spanish")}
        </Button>
        <Button onClick={() => i18n.changeLanguage("pt")}>
          {t("languages.portuguese")}
        </Button>
      </div> */}
    </LayoutWidget>
  );
};

export default HomePage;
