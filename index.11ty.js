export function data() {
  return {
    layout: "base.11ty.js",
    title: "Homepage",
  };
}

export const bundle = {
  css: "body {background: skyblue;}",
};

export function render(data) {
  return `
    <h1>${data.title}</h1>
    <p>This page has a CSS bundle but it isn't rendering.</p>
    <p>The output of the cssWrapped bundle is putting plain text at the start of the page. A result of trying to wrap this bundle in its own style element, but still outputing text when not found.</p>
  `;
}
