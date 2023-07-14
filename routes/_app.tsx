import { AppProps } from "$fresh/server.ts";
import { Head, asset } from "$fresh/runtime.ts";

export default function App({ Component }: AppProps) {
  return (
    <html>
        <Head>
          {/* <script src="https://cdn.tailwindcss.com?plugins=forms,typography,aspect-ratio,line-clamp"></script> */}
          {/* <link rel="stylesheet" href="https://esm.sh/v128/@tailwindcss/typography@0.1.3/dist/typography.min.css"/>  */}
          <link href={ asset("/css/output.css") } rel="stylesheet" />
          
        </Head>
        <body>

            <Component />
        </body>
      
    </html>
  );
}