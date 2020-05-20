import React from 'react';
import PropTypes from 'prop-types';
import notesImage from '../src/images/notebook.png';

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta httpEquiv="content-type" content="text/html; charset=UTF-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta property="og:url" content={'https://notebook.andyjgao.com/'} />
        <meta property="og:description" content="a public notebook of networked thoughts" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={"Andy J Gao's notes"} />
        <meta property="og:image" content={'https://notebook.andyjgao.com'.concat(notesImage)} />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div key={`body`} id="___gatsby" dangerouslySetInnerHTML={{ __html: props.body }} />
        {props.postBodyComponents}
      </body>
    </html>
  );
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};
