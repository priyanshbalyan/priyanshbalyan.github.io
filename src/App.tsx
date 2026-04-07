import Header from './components/Header';
import About from './components/About';
import WorkList from './components/WorkList';
import Footer from './components/Footer';
import { lazy, Suspense, useEffect, useState } from 'react';
import { PlayerProvider } from './context/PlayerContext';

const MusicPlayerBar = lazy(() => import('./components/MusicPlayerBar'));

function usePageLoaded() {
  const [loaded, setLoaded] = useState(() => document.readyState === 'complete');

  useEffect(() => {
    if (document.readyState === 'complete') return;
    const onLoad = () => setLoaded(true);
    window.addEventListener('load', onLoad);
    return () => window.removeEventListener('load', onLoad);
  }, []);

  return loaded;
}

export default function App() {
  const pageLoaded = usePageLoaded();

  useEffect(() => {
    // Dynamically load main.js after the React components have mounted
    // This replicates the Next.js lazyOnload/interactive strategy
    const script = document.createElement('script');
    script.src = '/js/main.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <div className="ScrollWrapper">
        <Header />

        <main>
          <div className="max-w-[700px] mx-auto px-[20px] w-full">
            <About />
            <WorkList />
          </div>

          <Footer />
        </main>
        <div className="relative w-full rotate-180 h-[150px] overflow-hidden pointer-events-none max-md:h-[100px]">
          <canvas className="absolute bottom-0 left-0 w-full h-[300px] mb-[-150px] opacity-0 transition-opacity duration-100 max-md:h-[200px] max-md:mb-[-100px] Scene-mountains"></canvas>
        </div>
      </div>
      {pageLoaded && (
        <PlayerProvider>
          <Suspense fallback={null}>
            <MusicPlayerBar />
          </Suspense>
        </PlayerProvider>
      )}
    </>
  );
}
