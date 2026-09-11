import { useId, useState } from "react";

import { changeLanguage, locales } from "@i18n";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";
import {
  Box,
  ButtonBase,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";

import type { LanguageSwitcherWidgetPropsType } from "./types";

// Each language is listed by its own name so visitors can find theirs
// regardless of the language the page is currently rendered in.
const endonyms: Record<string, string> = {
  en: "English",
  es: "Español",
  fr: "Français",
  it: "Italiano",
  pt: "Português",
};

export const LanguageSwitcherWidget = ({
  variant = "menu",
  ...props
}: LanguageSwitcherWidgetPropsType) => {
  const { t, i18n } = useTranslation();
  const menuId = useId();

  const [menuRef, setMenuRef] = useState<HTMLElement | null>(null);
  const open = Boolean(menuRef);

  const languages = Object.keys(locales);
  const currentLanguage = i18n.resolvedLanguage ?? i18n.language;

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setMenuRef(event.currentTarget);
  };

  const handleClose = () => {
    setMenuRef(null);
  };

  const handleLanguageChange = (language: string) => {
    changeLanguage(language);
    handleClose();
  };

  if (variant === "inline") {
    return (
      <Box {...props}>
        <Stack
          direction="row"
          alignItems="center"
          gap={1}
          mb={1.5}
          color="rgba(250,250,250,0.56)"
        >
          <LanguageRoundedIcon sx={{ fontSize: 18 }} />
          <Typography fontSize={14} color="inherit">
            {endonyms[currentLanguage]}
          </Typography>
        </Stack>

        <Stack direction="row" flexWrap="wrap" gap={1}>
          {languages.map((value) => {
            const selected = value === currentLanguage;

            return (
              <ButtonBase
                key={value}
                aria-label={endonyms[value]}
                aria-pressed={selected}
                onClick={() => handleLanguageChange(value)}
                sx={{
                  minWidth: 48,
                  height: 38,
                  px: 1.5,
                  borderRadius: "8px",
                  fontSize: 13,
                  fontWeight: 750,
                  letterSpacing: "0.06em",
                  color: selected ? "#FAFAFA" : "rgba(250,250,250,0.72)",
                  backgroundColor: selected
                    ? "#FF6E00"
                    : "rgba(250,250,250,0.03)",
                  border: "1px solid",
                  borderColor: selected ? "#FF6E00" : "rgba(250,250,250,0.12)",
                  transition:
                    "border-color 180ms ease, background-color 180ms ease, color 180ms ease",
                  "&:hover": selected
                    ? {}
                    : {
                        color: "#FAFAFA",
                        borderColor: "rgba(255,110,0,0.40)",
                        backgroundColor: "rgba(255,110,0,0.06)",
                      },
                  "&.Mui-focusVisible": {
                    outline: "2px solid #FF6E00",
                    outlineOffset: 2,
                  },
                }}
              >
                {value.toUpperCase()}
              </ButtonBase>
            );
          })}
        </Stack>
      </Box>
    );
  }

  return (
    <Box {...props}>
      <ButtonBase
        id={`${menuId}-trigger`}
        aria-haspopup="menu"
        aria-controls={open ? `${menuId}-menu` : undefined}
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{
          gap: 0.75,
          height: 38,
          pl: 1.25,
          pr: 1,
          borderRadius: "8px",
          color: "#FAFAFA",
          border: "1px solid",
          borderColor: open ? "rgba(255,110,0,0.40)" : "rgba(250,250,250,0.12)",
          backgroundColor: open
            ? "rgba(255,110,0,0.08)"
            : "rgba(250,250,250,0.03)",
          transition: "border-color 180ms ease, background-color 180ms ease",
          "&:hover": {
            borderColor: "rgba(255,110,0,0.40)",
            backgroundColor: "rgba(255,110,0,0.06)",
          },
          "&.Mui-focusVisible": {
            outline: "2px solid #FF6E00",
            outlineOffset: 2,
          },
        }}
      >
        <LanguageRoundedIcon
          sx={{ fontSize: 18, color: "rgba(250,250,250,0.64)" }}
        />
        <Typography
          color="inherit"
          fontSize={13}
          fontWeight={750}
          sx={{ letterSpacing: "0.06em" }}
        >
          {currentLanguage.toUpperCase()}
        </Typography>
        <ExpandMoreRoundedIcon
          sx={{
            fontSize: 18,
            color: "rgba(250,250,250,0.56)",
            transform: open ? "rotate(180deg)" : "none",
            transition: "transform 180ms ease",
          }}
        />
      </ButtonBase>

      <Menu
        id={`${menuId}-menu`}
        anchorEl={menuRef}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        slotProps={{
          list: {
            "aria-labelledby": `${menuId}-trigger`,
            sx: { p: 0.75 },
          },
          paper: {
            sx: {
              mt: 1.75,
              minWidth: 232,
              color: "#FAFAFA",
              backgroundColor: "rgba(27,27,27,0.96)",
              backgroundImage: "none",
              backdropFilter: "blur(18px) saturate(135%)",
              border: "1px solid rgba(250,250,250,0.10)",
              borderRadius: "12px",
              boxShadow:
                "0 24px 40px -20px rgba(0,0,0,0.85), inset 0 1px rgba(250,250,250,0.045)",
            },
          },
        }}
      >
        {languages.map((value) => {
          const selected = value === currentLanguage;
          const translatedLabel = t(`languages.${value}.label`);

          return (
            <MenuItem
              key={value}
              selected={selected}
              onClick={() => handleLanguageChange(value)}
              sx={{
                gap: 1.5,
                minHeight: 46,
                color: "#FAFAFA",
                px: 1.25,
                py: 0.75,
                borderRadius: "8px",
                "& + &": { mt: 0.25 },
                "&:hover": { backgroundColor: "rgba(250,250,250,0.05)" },
                "&.Mui-focusVisible": {
                  backgroundColor: "rgba(250,250,250,0.07)",
                },
                "&.Mui-selected, &.Mui-selected:hover, &.Mui-selected.Mui-focusVisible":
                  { backgroundColor: "rgba(255,110,0,0.10)" },
              }}
            >
              <Box
                component="span"
                sx={{
                  display: "grid",
                  placeItems: "center",
                  flex: "0 0 auto",
                  width: 32,
                  height: 22,
                  borderRadius: "5px",
                  fontSize: 11,
                  fontWeight: 800,
                  letterSpacing: "0.06em",
                  color: selected ? "#FAFAFA" : "rgba(250,250,250,0.62)",
                  backgroundColor: selected ? "#FF6E00" : "transparent",
                  border: "1px solid",
                  borderColor: selected ? "#FF6E00" : "rgba(250,250,250,0.14)",
                }}
              >
                {value.toUpperCase()}
              </Box>

              <Stack flex={1} minWidth={0}>
                <Typography
                  lang={value}
                  color="inherit"
                  fontSize={14}
                  fontWeight={selected ? 650 : 500}
                  lineHeight={1.25}
                >
                  {endonyms[value]}
                </Typography>
                {translatedLabel !== endonyms[value] && (
                  <Typography
                    color="rgba(250,250,250,0.48)"
                    fontSize={12}
                    lineHeight={1.25}
                  >
                    {translatedLabel}
                  </Typography>
                )}
              </Stack>

              {selected && (
                <CheckRoundedIcon sx={{ fontSize: 18, color: "#FF8034" }} />
              )}
            </MenuItem>
          );
        })}
      </Menu>
    </Box>
  );
};
