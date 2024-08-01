export function data() {
  return {
    layout: "base.11ty.js",
    title: "No Bundle",
  };
}

export function render(data) {
  return `
    <h1>${data.title}</h1>
    <p>This page has no CSS bundle.</p>
    <p>It is impacted by having both bundles empty. A style tag with a comment is injected in the head, and plain text is injected in the body.</p>
  `;
}
