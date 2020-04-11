import React from "react";
import {
  themeController as _themeController,
  TFont,
  TThemeIn,
  IThemeController,
  IThemeProvider,
} from "vilicando-theme";
import Head from "next/head";

export * from "vilicando-theme";

const parsePx = (val: string | number) =>
  typeof val === "number" ? `${val}px` : val;

const getFont = (theme: TFont) => `
  color: ${theme.color};
  font-family: ${theme.fontFamily};
  font-size: ${parsePx(theme.fontSize)};
  font-style: ${theme.fontStyle};
  font-weight: ${theme.fontWeight};
  text-align: ${theme.textAlign};
  text-decoration-line: ${theme.textDecorationLine};
  text-decoration-style: ${theme.textDecorationStyle};
  text-decoration-color: ${theme.textDecorationColor};
  text-transform: ${theme.textTransform};
  letter-spacing: ${parsePx(theme.letterSpacing)};
  line-height: ${theme.lineHeight};
`;

export function themeController<T>(
  nameOrVars?: string | TThemeIn<T>,
  vars?: TThemeIn<T>
): IThemeController<T> {
  const {
    defaultTheme,
    ThemeProvider,
    useTheme,
    useThemeContext,
    ...rest
  } = _themeController(nameOrVars, vars);

  function CoreThemeProvider(props: IThemeProvider) {
    const { theme: _theme, setTheme: _setTheme } = props;
    const [theme, setTheme] = React.useState<string>(_theme || defaultTheme);
    const themeVars = useTheme(_theme || theme);
    const [activeTheme] = useThemeContext();

    return (
      <>
        {activeTheme === (_theme || defaultTheme) && (
          <Head>
            <style>
              {`
                html,
                body {
                  width: 100%;
                  height: 100%;
                  font-family: ${themeVars.font.base.fontFamily};
                  font-size: ${parsePx(themeVars.font.base.fontSize)};
                  color: ${themeVars.font.base.color};
                }
                body {
                  background-color: ${themeVars.app.background};
                  ${getFont(themeVars.font.base)}
                }
                #__next {
                  width: 100%;
                  min-height: 100%;
                  display: flex;
                  flex-direction: column;
                  background-color: ${themeVars.app.foreground};
                }
                #__next > * {
                  flex-grow: 1;
                }
                h1 {
                  ${getFont(themeVars.heading[1])}
                }
                h2 {
                  ${getFont(themeVars.heading[2])}
                }
                h3 {
                  ${getFont(themeVars.heading[3])}
                }
                h4 {
                  ${getFont(themeVars.heading[4])}
                }
                h5 {
                  ${getFont(themeVars.heading[5])}
                }
                h6 {
                  ${getFont(themeVars.heading[6])}
                }
                a {
                  ${getFont(themeVars.link.base)}
                }
                a:hover {
                  ${getFont(themeVars.link.hover)}
                }
                a:active {
                  ${getFont(themeVars.link.active)}
                }
                a:focus {
                  ${getFont(themeVars.link.focus)}
                }
                code {
                  background-color: ${themeVars.palette.primary[1]};
                  padding-left: ${themeVars.spacing.xxs};
                  padding-right: ${themeVars.spacing.xxs};
                }
              `}
            </style>
          </Head>
        )}
        <ThemeProvider
          {...props}
          theme={_theme || theme}
          setTheme={_setTheme || setTheme}
        />
      </>
    );
  }

  return {
    defaultTheme,
    useTheme,
    useThemeContext,
    ...rest,
    ThemeProvider: CoreThemeProvider,
  };
}
