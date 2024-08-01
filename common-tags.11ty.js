import { html } from "common-tags";

export function data() {
  return {
    layout: "base.11ty.js",
    title: "Using Common Tags",
  };
}

export const bundle = {
  cssWrapped: html`
    <style>
      body {
        background-color: lightgreen;
      }
    </style>
  `,
};

export function render(data) {
  return html`
    <h1>${data.title}</h1>
    <p>
      This page uses the common-tags package and wraps a new bundle in a style
      element.
    </p>
    <p>
      It has a style element in the head with a comment denoting a missing css
      bundle.
    </p>
    <p>
      The wrapped bundle does not get found and instead eleventy code is
      injected as plain text.
    </p>
  `;
}
