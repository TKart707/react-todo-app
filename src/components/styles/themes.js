import { createGlobalStyle } from "styled-components"
import MobileBgLight from "../../assets/bg-mobile-light.jpg";
import MobileBgDark from "../../assets/bg-mobile-dark.jpg";
import DesktopBgLight from "../../assets/bg-desktop-light.jpg";
import DesktopBgDark from "../../assets/bg-desktop-dark.jpg";
import styled from "styled-components";

export const lightTheme = {
    appBG: "#FAFAFA",
    todoBG: "#FFFFFF",

    mobileBgImg: `url(${MobileBgLight})`,
    desktopBgImg: `url(${DesktopBgLight})`, 

    boxShadow: "0px 35px 50px -15px rgba(194, 195, 214, 0.5)",

    textColorTodo: "#494C6B",
    textColorInput: "#393A4B",
    textColorPlaceholder: "#9495A5",
    textColorStrike: "#D1D2DA",
    textColorFilter: "#9495A5",
    textColorFilterAll: "#3A7CFD",
    textColorHover: "#494C6B",

    line: "#E3E4F1",
    circle: "#E3E4F1",
    crossIcon: "#979797",
    checkIcon: "linear-gradient(135deg, #55DDFF 0%, #C058F3 100%)"
}

export const darkTheme = {
    appBG: "#171823",
    todoBG: "#25273D",

    mobileBgImg: `url(${MobileBgDark})`,
    desktopBgImg: `url(${DesktopBgDark})`, 

    boxShadow: "0px 35px 50px -15px rgba(0, 0, 0, 0.5)",

    textColorTodo: "#C8CBE7",
    textColorInput: "#C8CBE7",
    textColorPlaceholder: "#767992",
    textColorStrike: "#4D5067",
    textColorFilter: "#5B5E7E",
    textColorFilterAll: "#3A7CFD",
    textColorHover: "#E3E4F1",

    line: "#393A4B",
    circle: "#393A4B",
    crossIcon: "#979797",
    checkIcon: "linear-gradient(135deg, #55DDFF 0%, #C058F3 100%)",
}

export const Circle = styled.div`
    width: 20px;
    height: 20px;

    border-radius: 50%;   
    border: 1px solid ${({theme}) => theme.circle};

    @media only screen and (min-width: 1440px) {
        width: 24px;
        height: 24px;
    }
`

export const GlobalStyles = createGlobalStyle`
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    *, *::before, *::after {
        box-sizing: border-box;
    }

    body {
        font-family: 'Josefin Sans', sans-serif;
        font-style: normal;
    }
`;