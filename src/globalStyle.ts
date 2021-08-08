import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    :root, ::before, ::after {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu",
        "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        --color-white: #fff;
        --color-grey: #828181;
        --color-charcoal: #424e58;
        --color-blue: #45a1f8;
        --color-bg-grey: #eef3f4;
        --color-bg-black: #2a2a2a;
    }
`;
