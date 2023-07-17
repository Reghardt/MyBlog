import { esbuild } from "$fresh/src/server/deps.ts";
// import { Bundler } from "$fresh/src/server/bundle.ts";
import mdx from '@mdx-js/esbuild'

import * as runtime from 'preact/jsx-runtime'

await esbuild.build({
  entryPoints: ['./md/0_why_blog.mdx'],
  outfile: 'output.ts',
  format: 'esm',
  plugins: [mdx({allowDangerousRemoteMdx: true, jsxRuntime: "automatic"  /* Other options… */})]
})

