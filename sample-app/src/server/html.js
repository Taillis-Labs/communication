import { renderToString } from "react-dom/server"
import React, { PureComponent } from "react"

class Html extends PureComponent {
  render() {
    const content = this.props.component ? renderToString(this.props.component):""
    const data = this.props.store ? JSON.stringify(this.props.store.getState().toJSON()):{}

    return (
      <html>
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Evaluation</title>
          <link href="/assets/styles.css" media="screen" rel="stylesheet" type="text/css" />
        </head>
        <body>
          <div id="app" dangerouslySetInnerHTML={{ __html: content }} />
          <script type="application/javascript" dangerouslySetInnerHTML={{
            __html: `window.__data = ${data};`
          }}></script>
          <script src="/assets/app.min.js"></script>
        </body>
      </html>
    )
  }
}

export default Html
