import { Button, ThemeProvider, Typography } from "@mui/material";
import { lightTheme } from "@themes";
import { useTranslation } from "react-i18next";

const WEB = () => {
  const { t, i18n } = useTranslation();

  return (
    <ThemeProvider theme={lightTheme}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Typography>Languages</Typography>
        <Button onClick={() => i18n.changeLanguage("en")}>
          {t("languages.english")}
        </Button>
        <Button onClick={() => i18n.changeLanguage("es")}>
          {t("languages.spanish")}
        </Button>
        <Button onClick={() => i18n.changeLanguage("pt")}>
          {t("languages.portuguese")}
        </Button>
      </div>
    </ThemeProvider>
  );
};

export default WEB;
