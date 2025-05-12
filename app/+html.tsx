import { colors } from "@/constants/colors";
import { ScrollViewStyleReset } from "expo-router/html";

export default function Root({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />

        <ScrollViewStyleReset />

        <style dangerouslySetInnerHTML={{ __html: customStyles }} />
      </head>
      <body>
        {children}
        <div id="clerk-captcha" />
      </body>
    </html>
  );
}

const customStyles = `
  * {
    touch-action: cross-slide-y cross-slide-x;
    -webkit-tap-highlight-color: transparent;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-overflow-scrolling: touch;
    -webkit-touch-callout: none;
    -webkit-user-drag: none;
    scroll-behavior: smooth; 
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
    
  html, body {
    background-color: ${colors.background.light};
    overscroll-behavior-y: contain;
    touch-action: none;
    position: relative;
    overflow: hidden;
    height: 100dvh;
    margin: 0;
  }

  input,
  textarea,
  select {
    -webkit-appearance: none;
    appearance: none;
    outline: none !important;
    box-shadow: none !important;
    background: transparent;
    border: none;
  }

  #clerk-captcha {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 9999;
  }

  ::-webkit-scrollbar {
    width: 0.5rem;
    height: 0.5rem;
    margin-right: 0.5rem;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: ${colors.general.light[500]};
  }


  ::-webkit-scrollbar-track {
    background-color: ${colors.background.light};
  }
    
  ::-webkit-scrollbar-thumb {
    border-radius: 20px;
    background-color: ${colors.primary.light.DEFAULT};
  }

  @media (prefers-color-scheme: dark) {
    body {
      background-color: ${colors.background.dark};
    }

    ::-webkit-scrollbar-thumb:hover {
      background-color: ${colors.general.dark[500]};
    }

    ::-webkit-scrollbar-track {
      background-color: ${colors.background.dark};
    }
    ::-webkit-scrollbar-thumb {
      border-radius: 20px;
      background-color: ${colors.primary.dark.DEFAULT};
    }
  }
`;
