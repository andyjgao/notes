import React from 'react';
import { Link } from 'gatsby';
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer';
import { Helmet } from 'react-helmet';
import { MDXProvider } from '@mdx-js/react';
import qs from 'querystring';
import NavBar from './NavBar';
import notesImage from '../../images/notebook.png';
import '../../style.css';
import favicon from '../../images/favicon.png';

import components from 'gatsby-theme-andy/src/components/MdxComponents';

// Hook
function useWindowSize() {
  const isClient = typeof window === 'object';

  function getSize() {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined
    };
  }

  const [windowSize, setWindowSize] = React.useState(getSize);

  React.useEffect(() => {
    if (!isClient) {
      return false;
    }
    
    function handleResize() {
      setWindowSize(getSize());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return windowSize;
}


const location = typeof window !== `undefined` ? window.location : { href: '' };
let NOTE_WIDTH = 576;

const BrainNoteContainer = ({ note }) => {
  const size = useWindowSize();
  const [stackedNotes, setStackedNotes] = React.useState([]);
  const [scrollPosition, setScrollPosition] = React.useState(0);
  const notesContainerRef = React.useRef();
  const stackedNotesSlugs = React.useMemo(() => {
    if (!location.search) return [];
    const res = qs.parse(location.search.replace(/^\?/, '')).stackedNotes || [];
    if (typeof res === 'string') {
      return [res];
    }
    return res;
  }, [location.href]);
  React.useEffect(() => {
    if(size.width < 576){
      NOTE_WIDTH = size.width;
      console.log(NOTE_WIDTH, "change")
    }
  });
  React.useEffect(() => {
    Promise.all(
      // hook into the internals of Gatsby to dynamically fetch the notes
      stackedNotesSlugs.map((slug) => window.___loader.loadPage(slug))
    ).then((data) =>
      setStackedNotes(
        // filter out 404s
        data.filter((x) => x.json.data.brainNote)
      )
    );
  }, [stackedNotesSlugs]);

  React.useEffect(() => {
    if (notesContainerRef.current) {
      notesContainerRef.current.scrollTo({
        top: 0,
        left: NOTE_WIDTH * (stackedNotes.length + 1),
        behavior: 'smooth',
      });
    }
  }, [stackedNotes]);

  const onContainerScroll = (e) => {
    setScrollPosition(e.target.scrollLeft);
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{note.title} - Andy J Gao's notes</title>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content={'@andyjgao'} />
        <meta name="twitter:title" content={note.title.concat(" - Andy J Gao's notes")} />
        <meta name="twitter:description" content="a public notebook of networked thoughts" />
        <meta
          name="twitter:image:src"
          content={'https://notebook.andyjgao.com'.concat(notesImage)}
        />
        <link rel="icon" type="image/png" href={favicon} />

      </Helmet>
      <div id="brainNote" className="text-gray-900 flex flex-col min-h-screen h-screen">
        <div className="font-bold border-b px-4">
          <NavBar />
        </div>
        <div
          ref={notesContainerRef}
          className="notes-container flex flex-1 overflow-x-auto overflow-y-hidden"
          onScroll={onContainerScroll}
        >
          <BrainNote
            note={note}
            // NOTE_WIDTH={NOTE_WIDTH}
            almostHidden={scrollPosition > NOTE_WIDTH - 100}
          />
          {stackedNotes.map((sn, i) => (
            <BrainNote
              key={i}
              index={i + 1}
              note={sn.json.data.brainNote}
              stackedNote
              almostHidden={scrollPosition > NOTE_WIDTH * (i + 2) - 100}
            />
          ))}
        </div>
      </div>
    </>
  );
};

const BrainNote = ({ note, index = 0, stackedNote, almostHidden }) => {
  let references = [];
  let referenceBlock;
  if (note.inboundReferenceNotes != null) {
    references = note.inboundReferenceNotes.map((reference) => (
      <a
        className="no-underline hover:text-gray-700"
        href={`/${reference.slug}`}
        key={reference.slug}
      >
        <div className="py-2">
          <h5 className="">{reference.title}</h5>
          <p className="text-sm m-0 font-normal">{reference.childMdx.excerpt}</p>
        </div>
      </a>
    ));

    if (references.length > 0) {
      referenceBlock = (
        <>
          <h3>Mentioned in</h3>
          <div className="mb-4">{references}</div>
          <hr className="mx-auto w-32" />
        </>
      );
    }
  }

  const popups = {};
  if (note.outboundReferenceNotes) {
    note.outboundReferenceNotes
      .filter((reference) => !!reference.childMdx.excerpt)
      .forEach((ln, i) => {
        popups[ln.slug] = (
          <div
            id={ln.slug}
            className="w-64 p-4 bg-gray-100 rounded-lg shadow-lg border border-gray-200"
          >
            <h4 className="mb-2">{ln.title}</h4>
            <p className="text-sm">{ln.childMdx.excerpt}</p>
          </div>
        );
      });
  }

  const AnchorTagWithPopups = (props) => <components.a {...props} popups={popups} index={index} />;

  return (
    <MDXProvider components={{ a: AnchorTagWithPopups }}>
      <div
        className={`container max-w-xl px-4 overflow-y-auto sticky bg-white ${
          stackedNote ? `shadow-lg` : ``
        }`}
        style={{ minWidth: NOTE_WIDTH, left: 40 * index, right: -585 }}
      >
        <div
          className={`transition-opacity duration-200 ${
            almostHidden ? `opacity-100` : `opacity-0`
          }`}
        >
          <div className={`transform rotate-90 origin-left pb-4 absolute`}>
            <p className="m-0 font-bold">{note.title}</p>
          </div>
        </div>
        <div
          className={`flex flex-col min-h-full transition-opacity duration-200 ${
            almostHidden ? `opacity-0` : `opacity-100`
          }`}
        >
          <div className="flex-1">
            <h1 className="my-4">{note.title}</h1>
            <MDXRenderer>{note.childMdx.body}</MDXRenderer>
          </div>
          <div className="refs-box bg-gray-100 text-gray-600 rounded-lg mb-4 mt-5 p-4">
            {referenceBlock}
            <p className="text-sm text-center m-0">
              <span>Made with ❤</span> by <a href="https://twitter.com/andyjgao">Andy J Gao</a>
            </p>
          </div>
        </div>
      </div>
    </MDXProvider>
  );
};


export default BrainNoteContainer;
