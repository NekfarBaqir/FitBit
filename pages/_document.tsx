import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head />
      {/* font and favIcon set */}
      <link rel="icon" href="images/favIcon.png"></link>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="crossorigin"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;700;800&display=swap"
        rel="stylesheet"
      />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
