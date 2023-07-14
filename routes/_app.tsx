import { AppProps } from "$fresh/server.ts";
import { Head, asset } from "$fresh/runtime.ts";

export default function App({ Component }: AppProps) {
  return (
    <html>
        <Head>
          {/* <script src="https://cdn.tailwindcss.com?plugins=forms,typography,aspect-ratio,line-clamp"></script> */}
          {/* <link rel="stylesheet" href="https://esm.sh/v128/@tailwindcss/typography@0.1.3/dist/typography.min.css"/>  */}
          <link href={ asset("/css/output.css") } rel="stylesheet" />

          <link href={ asset("/css/vscdark.css") } rel="stylesheet" />

          
        </Head>
        <body>
          <script src="https://cdn.jsdelivr.net/npm/prismjs@v1.29.0/components/prism-core.min.js"></script>
	        <script src="https://cdn.jsdelivr.net/npm/prismjs@v1.29.0/plugins/autoloader/prism-autoloader.min.js"></script>

          <Component />
        </body>
      
    </html>
  );
}