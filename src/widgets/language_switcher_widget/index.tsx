import { useState } from "react";

import { locales } from "@i18n";
import {
  Box,
  Button,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";

import type { LanguageSwitcherWidgetPropsType } from "./types";

export const LanguageSwitcherWidget = ({
  ...props
}: LanguageSwitcherWidgetPropsType) => {
  const { t, i18n } = useTranslation();

  const [refEl, setRefEl] = useState<HTMLElement | null>(null);
  const open = Boolean(refEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setRefEl(event.currentTarget);
  };

  const handleClose = () => {
    setRefEl(null);
  };

  const handleLanguageChange = (language: string) => {
    i18n.changeLanguage(language);
    handleClose();
  };

  return (
    <Box {...props} color="inherit">
      <Button variant="clear" color="inherit" onClick={handleClick}>
        <Typography color="inherit">{i18n.language.toUpperCase()}</Typography>
      </Button>

      <Menu
        anchorEl={refEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        {Object.keys(locales).map((lang) => (
          <MenuItem
            key={lang}
            onClick={() => handleLanguageChange(lang)}
            selected={i18n.language === lang}
          >
            <ListItemIcon>{lang.toUpperCase()}</ListItemIcon>
            <ListItemText>{t(`languages.${lang}.label`)}</ListItemText>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};
