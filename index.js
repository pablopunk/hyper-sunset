const colors = {
  black: "#454545",
  background: "#272935",
  white: "#ffffff",
  foreground: "#dadada",
  red: "#CD5B6F",
  green: "#6ef8be",
  yellow: "#e9ff81",
  blue: "#6aa2ff",
  magenta: "#c481ff",
  cyan: "#6de5ff",
};

module.exports.decorateConfig = (config) => {
  const themeColors = config.theme === "light" ? colors.light : colors;

  return {
    ...config,
    colors: {
      ...themeColors,
      lightBlack: themeColors.black,
      ligthRed: themeColors.red,
      lightGreen: themeColors.green,
      lightYellow: themeColors.yellow,
      lightBlue: themeColors.blue,
      lightMagenta: themeColors.magenta,
      lightCyan: themeColors.cyan,
    },
    backgroundColor: themeColors.background,
    foregroundColor: themeColors.foreground,
  };
};
