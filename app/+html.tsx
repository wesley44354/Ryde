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
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/ionicons@5.5.2/dist/css/ionicons.min.css"
          rel="stylesheet"
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
  body {
    margin: 0;
    padding: 0;
    overflow: hidden;
    position: relative;
    background-color: ${colors.background.light};
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
