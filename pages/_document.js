import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        {/* <link
          href="https://fonts.googleapis.com/css2?family=Halant:wght@100;200;300;300;500&family=Lora:wght@100;200;300;400;500;600;700&family=Poppins:wght@100;200;300;400;600&display=swap"
          rel="stylesheet"
        /> */}

        <meta
          property="og:title"
          content="Essex County District Masonic Association"
        />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="masonic lodge masonry freemason ecdma essex county district  windsor ontario grand lodge masonic temple"
        />
        <meta
          name="description"
          content="Promoting Freemasonry in Essex County, Ontario."
        />
        <meta name="author" content="Essex County District Association" />
        <meta
          name="keywords"
          content="Freemasonry, Windsor Freemasonry, Essex Ontario Freemasonry, Essex County, Masons, Fraternity, Lodge, Masonic Temple, Essex County District Masons"
        />
        <meta
          name="author"
          content="Essex County District Masonic Association"
        />
        <meta property="og:url" content="https://ecdma.ca" />
        <meta
          property="og:site_name"
          content="Essex County District Masonic Association"
        />
        <meta name="robots" content="index, follow" />

        <html lang="en" />
        <link rel="icon" href="/favicon.ico" />

        <link
          href="https://fonts.googleapis.com/css2?family=Halant:wght@300;400;500;600;700&family=Quattrocento&family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
