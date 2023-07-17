import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "preact/jsx-runtime";
function _createMdxContent(props) {
  const _components = Object.assign({
    h1: "h1",
    h3: "h3",
    p: "p",
    pre: "pre",
    code: "code",
    br: "br"
  }, props.components);
  return _jsxs(_Fragment, {
    children: [_jsx(_components.h1, {
      children: "Tutorial: Real Tailwind with full intellisense support in Fresh JS"
    }), "\n", _jsx(_components.h3, {
      children: "With help from the dark side..."
    }), "\n", _jsx(_components.p, {
      children: "How it works:\r\nCreate a Fresh project by running the following in the command line:"
    }), "\n", _jsx(_components.pre, {
      children: _jsx(_components.code, {
        className: "language-powershell",
        children: "    deno run -A -r https://fresh.deno.dev\n"
      })
    }), "\n", _jsxs(_components.p, {
      children: ["Give it a name.", _jsx(_components.br, {}), "\n", 'Select "No" when it askes if you would like to use Tailwind CSS.', _jsx(_components.br, {}), "\n", "Yes for VS code, that's the editor I am using."]
    }), "\n", _jsx(_components.p, {
      children: "Open the directory that Fresh made."
    }), "\n", _jsxs(_components.p, {
      children: ['Create a folder in the root called "tailwind" and open it in a terminal,\r\ntype "run npm init" and press enter.', _jsx(_components.br, {}), "\n", "Keep on pressing enter until the prompts are gone."]
    }), "\n", _jsxs(_components.p, {
      children: ['Stil in the "tailwind" folder;', _jsx(_components.br, {}), "\n", 'type "npx tailwindcss init" in the terminal and run it.\r\nThen copy the below into the tailwind.config.js file.']
    }), "\n", _jsx(_components.pre, {
      children: _jsx(_components.code, {
        className: "language-js",
        children: '    // tailwind.config.js\r\n    module.exports = {\r\n        content: [\r\n            "../routes/**/*.tsx", \r\n            "../islands/**/*.tsx", \r\n            "../components/**/*.tsx"\r\n        ],\r\n        theme: {\r\n            extend: {},\r\n        },\r\n        plugins: [],\r\n    }\n'
      })
    }), "\n", _jsxs(_components.p, {
      children: ['Go to the "static" folder of Fresh.', _jsx(_components.br, {}), "\n", 'Create a folder in "static" called "css".', _jsx(_components.br, {}), "\n", 'In "css" create 2 files, one called "input.css" and the other "output.css"']
    }), "\n", _jsx(_components.p, {
      children: 'Open "input.css" and paste the following inside:'
    }), "\n", _jsx(_components.pre, {
      children: _jsx(_components.code, {
        className: "language-css",
        children: "    /* input.css */\r\n    @tailwind base;\r\n    @tailwind components;\r\n    @tailwind utilities;\n"
      })
    }), "\n", _jsxs(_components.p, {
      children: ['In the routes folder create a file called "_app.tsx".', _jsx(_components.br, {}), "\n", "Copy the below content into it:"]
    }), "\n", _jsx(_components.pre, {
      children: _jsx(_components.code, {
        className: "language-tsx",
        children: '    // _app.tsx\r\n    import { AppProps } from "$fresh/server.ts";\r\n    import { Head, asset } from "$fresh/runtime.ts";\r\n\r\n    export default function App({ Component }: AppProps) {\r\n    return(\r\n            <html>\r\n                <Head>\r\n                    <link \r\n                        href={asset("/css/output.css")} \r\n                        rel="stylesheet" \r\n                    />          \r\n                </Head>\r\n                <body>\r\n                    <Component />\r\n                </body>\r\n            </html>\r\n        );\r\n    }\n'
      })
    }), "\n", _jsx(_components.p, {
      children: 'Open "deno.json".\r\nModify the start task so it looks like:'
    }), "\n", _jsx(_components.pre, {
      children: _jsx(_components.code, {
        className: "language-json",
        children: '    // deno.json \r\n    {\r\n        "start": "cd tailwind; npx tailwindcss -i ../static/css/input.css -o ../static/css/output.css --watch & cd ..; deno run -A --watch=static/,routes/ dev.ts",\r\n    }\n'
      })
    }), "\n", _jsx(_components.p, {
      children: 'Open a terminal in the root directory of Fresh and run "deno task start".'
    }), "\n", _jsx(_components.p, {
      children: "You now have full featured Tailwind CSS working in Deno JS with intellisense."
    })]
  });
}
function MDXContent(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? _jsx(MDXLayout, Object.assign({}, props, {
    children: _jsx(_createMdxContent, props)
  })) : _createMdxContent(props);
}
var tut_tailwind_fresh_default = MDXContent;
export {
  tut_tailwind_fresh_default as default
};
