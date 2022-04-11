const overrides = {
  MuiIconButton: {
    root: {
      padding: "5px",
    },
  },
  MuiBadge: {
    anchorOriginTopRightCircular: {
      top: "26%",
      right: "35%",
    },
  },
  MuiChip: {
    root: {
      borderRadius: "10px",
    },
  },
  MuiGrid: {
    // Fix Safari bug when using spacing prop with Grid component
    root: {
      "& .MuiGrid-spacing-xs-1": {
        width: "auto",
      },
      "& .MuiGrid-spacing-xs-2": {
        width: "auto",
      },
      "& .MuiGrid-spacing-xs-3": {
        width: "auto",
      },
      "& .MuiGrid-spacing-xs-4": {
        width: "auto",
      },
    },
  },
  MuiLink: {
    root: {
      color: "#1E75FF",
    },
  },
  MuiAvatar: {
    root: {
      fontFamily: "Roboto",
    },
  },
  MuiButtonBase: {
    root: {
      "& .MuiButton-label": {
        pointerEvents: "none",
      },
    },
  },
};

export default overrides;
