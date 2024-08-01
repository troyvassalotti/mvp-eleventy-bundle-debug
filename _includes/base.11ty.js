export function render(data) {
  const { content } = data;

  return `
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
				<meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Testing 11ty Bundle</title>
        <style>
          html {
            box-sizing: border-box;
          }

          * {
            box-sizing: border-box;
          }
  
          body {
            min-block-size: 100vh;
          }
        </style>
        <style>${this.getBundle("css")}</style>
        ${this.getBundle("cssWrapped")}
      </head>
      <body>
        ${content}
        <ul>
          ${data.collections.all
            .map((post) => `<li><a href="${post.url}">${post.url}</a></li>`)
            .join("\n")}
        </ul>
      </body>
    </html>
  `;
}
