export function data() {
  return {
    layout: "base.11ty.js",
    title: "About",
  };
}

export const bundle = {
  css: "body {background: pink;}",
};

export function render(data) {
  return `
    <h1>${data.title}</h1>
    <p>This page has a CSS bundle and it is loading fine.</p>
    <p>This page is not impacted by plain text injected from an empty cssWrapped bundle.</p>
  `;
}
