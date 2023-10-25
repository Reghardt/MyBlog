import { AppProps } from "$fresh/server.ts";
import { asset } from "$fresh/runtime.ts";

export default function App({ Component }: AppProps) {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Reghardt's Blog</title>
        <link rel="stylesheet" href="/styles.css" />
        <link href={asset("/css/tailwind.css")} rel="stylesheet" />

        <link href={asset("/css/vscdark.css")} rel="stylesheet" />
      </head>
      <body>
        <script src="https://cdn.jsdelivr.net/npm/prismjs@v1.29.0/components/prism-core.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/prismjs@v1.29.0/plugins/autoloader/prism-autoloader.min.js"></script>
        <Component />
      </body>
    </html>
  );
}
