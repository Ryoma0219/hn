import { createMuiTheme } from "@material-ui/core/styles";
import pink from '@material-ui/core/colors/pink';
import { darken } from "@material-ui/core/styles/colorManipulator";

const overrideTheme = theme => ({
  ...theme,
  overrides: {
    MuiButton: {
      label: {
        textTransform: "initial"
      },
      contained: {
        boxShadow: "none",
        "&:active": {
          boxShadow: "none"
        }
      }
    },
    MuiTabs: {
      root: {
        marginLeft: theme.spacing.unit
      },
      indicator: {
        height: 3,
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3,
        backgroundColor: theme.palette.common.white
      }
    },
    MuiTab: {
      root: {
        textTransform: "initial",
        margin: "0 16px",
        minWidth: 0,
        [theme.breakpoints.up("md")]: {
          minWidth: 0
        }
      },
      labelContainer: {
        padding: 0,
        [theme.breakpoints.up("md")]: {
          padding: 0
        }
      }
    },
    MuiIconButton: {
      root: {
        padding: theme.spacing.unit
      }
    },
    MuiTooltip: {
      tooltip: {
        borderRadius: 4
      }
    },
    MuiListItemIcon: {
      root: {
        color: "inherit",
        marginRight: 0,
        "& svg": {
          fontSize: 20
        }
      }
    },
    MuiAvatar: {
      root: {
        width: 32,
        height: 32
      }
    },
    MuiOutlinedInput: {
      input: {
        padding: "14.5px 14px"
      }
    },
    MuiInputLabel: {
      outlined: {
        transform: `translate(12px, 16px) scale(1)`
      }
    }
  },
  props: {
    MuiTab: {
      disableRipple: true
    }
  }
});

const defaultPrimaryColor = {
  light: "#63ccff",
  main: "#009be5",
  dark: "#006db3"
};

export const createTheme = (
  type = "light",
  primaryColor = defaultPrimaryColor
) => {
  let theme = createMuiTheme({
    typography: {
      useNextVariants: true
    },
    palette: {
      primary: primaryColor,
      secondary: {
        main: darken(pink.A400, 0.08)
      },
      type: type
    },
    shape: {
      borderRadius: 8
    },
    nprogress: { color: type === "light" ? "#000" : "#fff" }
  });

  return overrideTheme(theme);
};

const defaultTheme = createTheme("light");

export default defaultTheme;
