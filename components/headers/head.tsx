import Head from "next/head";
import config from "@/lib/config";

export default function IndexHead() {
  return (
      <Head>
        <title>{config.title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content={config.description} key={config.title} />
        <meta property="og:title" content={config.description} key={config.title} />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/favicons/apple-touch-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/favicons/apple-touch-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/favicons/apple-touch-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/favicons/apple-touch-icon-76x76.png"
        />

        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/favicons/apple-touch-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/favicons/apple-touch-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/favicons/apple-touch-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/favicons/apple-touch-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="167x167"
          href="/favicons/apple-touch-icon-167x167.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-touch-icon-180x180.png"
        />

        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicons/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="128x128"
          href="/favicons/favicon-128x128.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="196x196"
          href="/favicons/favicon-196x196.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/favicons/android-chrome-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="/favicons/android-chrome-512x512.png"
        />

        <link rel="shortcut icon" href="/favicons/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest">
            
        </link>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />

        <meta
          name="msapplication-TileImage"
          content="/favicons/mstile-144x144.png"
        />
        <meta
          name="msapplication-square70x70logo"
          content="/favicons/mstile-70x70.png"
        />
        <meta
          name="msapplication-square150x150logo"
          content="/favicons/mstile-150x150.png"
        />
        <meta
          name="msapplication-square144x144logo"
          content="/favicons/mstile-144x144.png"
        />
        <meta
          name="msapplication-square310x310logo"
          content="/favicons/mstile-310x310.png"
        />
      </Head>
  );
}
