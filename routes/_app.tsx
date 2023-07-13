import { AppProps } from "$fresh/server.ts";
import { Head, asset } from "$fresh/runtime.ts";

export default function App({ Component }: AppProps) {
  return (
    <html>
        <Head>
          {/* <script src="https://cdn.tailwindcss.com?plugins=forms,typography,aspect-ratio,line-clamp"></script> */}
          <link href={ asset("/output.css") } rel="stylesheet" />
          <link rel="stylesheet" href="https://esm.sh/v128/@tailwindcss/typography@0.5.0/dist/typography.min.css"/>
        </Head>
        <body>

            <Component />
        </body>
      
    </html>
  );
}