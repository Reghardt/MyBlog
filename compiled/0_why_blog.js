import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "preact/jsx-runtime";
const name = "World";
const title = "Hi, " + name + "!";
function _createMdxContent(props) {
  const _components = Object.assign({
    h1: "h1",
    p: "p",
    ol: "ol",
    li: "li"
  }, props.components);
  return _jsxs(_Fragment, {
    children: [_jsx(_components.h1, {
      children: "Why Blog?"
    }), "\n", _jsx(_components.p, {
      children: "In his book Range, David Epstein writes about a study in which researchers Taylor and Greve analysed the commercial success of thousands of comic books from 234 publishers since 1971."
    }), "\n", _jsx(_components.p, {
      children: "They wanted to find out what best predicted the financial success of comic book creators, and what could increase their value variance, or in other words: the chance that a creator makes a comic book that failed badly or exceeds expectations compared to their usual work."
    }), "\n", _jsx(_components.p, {
      children: "Taylor and Greve made some predictions;"
    }), "\n", _jsxs(_components.ol, {
      children: ["\n", _jsx(_components.li, {
        children: "Creators learn from repetition and the creators making the most comics in a given amount of time would make better ones on average."
      }), "\n", _jsx(_components.li, {
        children: "The more resources a publisher had the better their creator's comics would be."
      }), "\n", _jsx(_components.li, {
        children: "As a creator's years of experience increases, the better their comics would be."
      }), "\n"]
    }), "\n", _jsx(_components.p, {
      children: "All three predictions were wrong."
    }), "\n", _jsx(_components.p, {
      children: "It turned out that high repetition workloads had a detrimental impact on performance, years of experience had zero effect and the amount of available resources didn't mean anything."
    }), "\n", _jsx(_components.p, {
      children: "They found the strongest predictor to be the number of genres a creator has worked in. That is, a creator's breadth of experience predicted the success of their comic books and not length of experience. Breadth made creators more likely to innovate and better on average."
    }), "\n", _jsx(_components.p, {
      children: "A creator who had worked in 4 or more genres was more innovative than a team who had collective experience in the same number of genres."
    }), "\n", _jsx(_components.p, {
      children: "As Taylor and Greve put it: \u201CIndividuals are capable of more creative integration of diverse experiences than teams are.\u201D"
    })]
  });
}
function MDXContent(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? _jsx(MDXLayout, Object.assign({}, props, {
    children: _jsx(_createMdxContent, props)
  })) : _createMdxContent(props);
}
var why_blog_default = MDXContent;
export {
  why_blog_default as default,
  name,
  title
};
