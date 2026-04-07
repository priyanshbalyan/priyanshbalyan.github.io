import Work from './components/Work';
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
        <header className="relative min-h-[300px] h-[75vh] mb-[90px]" data-vh="0.75">
          <nav className="absolute w-full z-[2] py-[20px] text-center">
            <a className="nav-link Nav-link text-brand-cream no-underline font-sans font-bold px-[20px] md:px-[40px] py-[10px] mx-[5px] md:mx-[10px] text-[16px]" href="#about">
              <span className="nav-link-span">About</span>
            </a>
            <a className="nav-link Nav-link text-brand-cream no-underline font-sans font-bold px-[20px] md:px-[40px] py-[10px] mx-[5px] md:mx-[10px] text-[16px]" href="#work">
              <span className="nav-link-span">Work</span>
            </a>
            <a className="nav-link Nav-link text-brand-cream no-underline font-sans font-bold px-[20px] md:px-[40px] py-[10px] mx-[5px] md:mx-[10px] text-[16px]" href="#contact">
              <span className="nav-link-span">Contact</span>
            </a>
          </nav>

          <div className="absolute inset-0 Scene">
            <div className="absolute inset-0 Scene-sky scene-sky-gradient" role="presentation"></div>
            <canvas className="absolute top-0 left-0 w-full h-full Scene-stars" role="presentation"></canvas>
            <canvas className="absolute bottom-0 left-0 w-full h-[300px] -mb-[150px] opacity-0 transition-opacity duration-100 max-md:h-[200px] max-md:-mb-[100px] Scene-mountains" data-stop-on-scroll="true" role="presentation"></canvas>
          </div>
          <h1 className="absolute top-1/2 w-full text-center uppercase -mt-[50px] tracking-[0.2em] text-[40px] md:text-[45px] leading-[1.4] font-bold text-brand-cyan font-sans max-md:tracking-normal max-md:normal-case">
            <span>Priyansh Balyan</span>
            <span className="block text-[0.6em] text-brand-cream h-[1em] tracking-[0.2em] mb-[15px] max-md:tracking-normal max-md:normal-case max-md:text-[0.7em]" aria-label="Senior Frontend Engineer">
              Senior Frontend Engineer
            </span>
            <center>
              <div className="relative w-0 mx-auto js-Lazyload" role="presentation" data-image="img/separator-green.svg"></div>
            </center>
          </h1>
        </header>

        <main>
          <div className="max-w-[700px] mx-auto px-[20px] w-full">
            <section className="section-divider">
              <h2 id="about" className="heading-with-icon">About</h2>
              <p className="text-[1.2em]">
                Senior Frontend engineer with 7 years of experience working with various technologies such as ReactJS,
                VueJS, TypeScript.
              </p>
              <p>
                Working at <a href="https://moneyforward.co.jp">Money Forward</a>. Previously{' '}
                <a href="https://paypay.ne.jp">PayPay</a>, <a href="https://agoda.com">Agoda</a>. Based in Tokyo, Japan.{' '}
                <a href="https://docs.google.com/document/d/1Aimw-h4wFM6_kSxg8RYiK8f76Qp4JmUf6zPI-J1wFOM/edit?usp=sharing">
                  Resume
                </a>
              </p>
            </section>

            <section className="section-divider">
              <h2 id="work" className="heading-with-icon">Work</h2>
              <div className="flex flex-col pt-[20px]">
                <Work
                  title="Pirate Villa"
                  subtitle="Property Rental Site"
                  description="[Freelance work] A client's website I developed using NextJS and SQLite db"
                  image="img/pirateslandingvi.png"
                  links={[]}
                />

                <Work
                  title="Discord File Storage"
                  subtitle="Python, Discord API"
                  description="A proof of concept of using Discord servers as file storage"
                  image="img/pic11.png"
                  links={[{ label: 'Source', link: 'https://github.com/priyanshbalyan/discord-file-storage' }]}
                />

                <Work
                  title="Maze Pathfinder"
                  subtitle="ReactJS, Lodash"
                  description="A graphical representation of various searching algorithms and how they find paths in a 2D maze."
                  image="img/pic01.jpg"
                  links={[
                    { label: 'View demo', link: 'https://priyanshbalyan.github.io/maze-runner/' },
                    { label: 'Source', link: 'https://github.com/priyanshbalyan/maze-runner' },
                  ]}
                />

                <Work
                  title="Live Covid Tracker"
                  subtitle="D3, VueJS, Web Scraping"
                  description="Live visualisation of current covid cases aroung the globe"
                  image="img/pic02.jpg"
                  links={[
                    { label: 'View demo', link: 'https://covid-d3.netlify.app/' },
                    { label: 'Source', link: 'https://github.com/priyanshbalyan/d3-map' },
                  ]}
                />

                <Work
                  title="Reddit Clone"
                  subtitle="NextJS, MongoDB, Jest (Unit tests)"
                  description="A reddit clone made with material design guidlines and integrated unit tests. "
                  image="img/pic03.jpg"
                  links={[
                    { label: 'View demo', link: 'http://tympanus.net/Development/StorytellingMap/' },
                    { label: 'Source', link: 'https://github.com/priyanshbalyan/maze-runner' },
                  ]}
                />

                <Work
                  title="Todo App"
                  subtitle="Loopback 4, TypeScript, VueJS"
                  description="A todo app made with Loopback, MongoDB, VueJS (NuxtJS) with Vuetify library."
                  image="img/pic04.jpg"
                  links={[{ label: 'Source', link: 'https://github.com/priyanshbalyan/nuxt-loopback-todo-app' }]}
                />

                <Work
                  title="Crawler Search"
                  subtitle="NodeJS, MongoDB"
                  description="A web crawler that scrapes github repositories"
                  image="img/pic05.jpg"
                  links={[
                    { label: 'View demo', link: 'https://crawler-search.herokuapp.com/' },
                    { label: 'Source', link: 'https://github.com/priyanshbalyan/crawler-search' },
                  ]}
                />

                <Work
                  title="Calculator"
                  subtitle="JavaScript"
                  description="A vanilla javascript calculator"
                  image="img/pic06.jpg"
                  links={[
                    { label: 'View demo', link: 'https://codepen.io/priyanshbalyan/full/qRWVPX' },
                    { label: 'Source', link: 'https://codepen.io/priyanshbalyan/pen/qRWVPX' },
                  ]}
                />

                <Work
                  title="Tic Tac Toe"
                  subtitle="JavaScript"
                  description=""
                  image="img/pic07.jpg"
                  links={[
                    { label: 'View demo', link: 'https://codepen.io/priyanshbalyan/full/wgaWQX' },
                    { label: 'Source', link: 'https://codepen.io/priyanshbalyan/pen/wgaWQX' },
                  ]}
                />

                <Work
                  title="Simon Game"
                  subtitle="JavaScript"
                  description=""
                  image="img/pic08.jpg"
                  links={[
                    { label: 'View demo', link: 'https://codepen.io/priyanshbalyan/full/MJbyRN' },
                    { label: 'Source', link: 'https://codepen.io/priyanshbalyan/pen/MJbyRN' },
                  ]}
                />
              </div>
            </section>
          </div>

          <footer className="pb-[70px] mb-[50px]">
            <h2 id="contact" className="heading-with-icon">Contact</h2>
            <div className="text-center">
              <div className="mb-[5px]">You can drop me a line at</div>
              <a className="Email nav-link text-brand-navy inline-block my-[5px] mx-auto text-[30px] max-md:text-[18px] max-md:my-[10px] max-md:mb-[25px]" href="mailto:priyanshbalyan@gmail.com">
                <span className="nav-link-span font-bold">priyanshbalyan</span> at <span className="nav-link-span font-bold">gmail</span> dot com
              </a>
              <div className="mb-[5px]">You can find me on</div>
              <div className="mt-[5px]">
                <a className="nav-link text-brand-navy block leading-[2] max-md:text-[18px]" href="https://www.linkedin.com/in/priyanshbalyan/">
                  <span className="nav-link-span font-bold text-brand-pink pr-1">linkedin</span>.com/<span className="nav-link-span font-bold">priyanshbalyan</span>
                </a>
                <br />
                <a className="nav-link text-brand-navy block leading-[2] max-md:text-[18px]" href="http://github.com/priyanshbalyan">
                  <span className="nav-link-span font-bold text-brand-pink pr-1">github</span>.com/<span className="nav-link-span font-bold">priyanshbalyan</span>
                </a>
                <br />
                <a className="nav-link text-brand-navy block leading-[2] max-md:text-[18px]" href="http://codepen.io/priyanshbalyan">
                  <span className="nav-link-span font-bold text-brand-pink pr-1">codepen</span>.io/<span className="nav-link-span font-bold">priyanshbalyan</span>
                </a>
                <br />
                <a
                  className="nav-link text-brand-navy block leading-[2] max-md:text-[18px]"
                  href="https://docs.google.com/document/d/1Aimw-h4wFM6_kSxg8RYiK8f76Qp4JmUf6zPI-J1wFOM/edit?usp=sharing"
                >
                  <span className="nav-link-span font-bold text-brand-pink">Resume</span>
                </a>
              </div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <a href="https://www.websitecounterfree.com">
                <img
                  src="https://www.websitecounterfree.com/c.php?d=9&id=58389&s=12"
                  style={{ border: 0 }}
                  alt="Free Website Counter"
                />
              </a>
              <br />
              <small>
                <a href="https://www.websitecounterfree.com" title="Free Website Counter">
                  Free Website Counter
                </a>
              </small>
            </div>
          </footer>
        </main>
        <div className="relative w-full rotate-180 h-[150px] overflow-hidden pointer-events-none max-md:h-[100px]">
          <canvas className="absolute bottom-0 left-0 w-full h-[300px] mb-[-150px] opacity-0 transition-opacity duration-100 max-md:h-[200px] max-md:mb-[-100px]"></canvas>
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
