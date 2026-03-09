import Work from './components/Work';
import { useEffect } from 'react';

export default function App() {
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
    <div className="ScrollWrapper">
      <header className="Header js-HasVH" data-vh="0.75">
        <nav>
          <a className="Nav-link" href="#about">
            <span>About</span>
          </a>
          <a className="Nav-link" href="#work">
            <span>Work</span>
          </a>
          <a className="Nav-link" href="#contact">
            <span>Contact</span>
          </a>
        </nav>

        <div className="Scene">
          <div className="Scene-sky" role="presentation"></div>
          <canvas className="Scene-stars" role="presentation"></canvas>
          <canvas className="Scene-mountains" data-stop-on-scroll="true" role="presentation"></canvas>
        </div>
        <h1 className="Title">
          <span>Priyansh Balyan</span>
          <span className="Title-small" aria-label="Senior Frontend Engineer">
            Senior Frontend Engineer
          </span>
          <div className="Title-separator js-Lazyload" role="presentation" data-image="img/separator-green.svg"></div>
        </h1>
      </header>

      <main>
        <div className="container">
          <section>
            <h2 id="about">About</h2>
            <p className="heading">
              Senior Frontend engineer with 7 years of experience working with various technologies such as ReactJS,
              VueJS, TypeScript.
            </p>
            <p>
              Working at <a href="https://moneyforward.com">Money Forward</a>. Previously{' '}
              <a href="https://paypay.ne.jp">PayPay</a>, <a href="https://agoda.com">Agoda</a>. Based in Tokyo, Japan.{' '}
              <a href="https://docs.google.com/document/d/1Aimw-h4wFM6_kSxg8RYiK8f76Qp4JmUf6zPI-J1wFOM/edit?usp=sharing">
                Resume
              </a>
            </p>
          </section>

          <section>
            <h2 id="work">Work</h2>
            <div className="Works">
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

        <footer>
          <h2 id="contact">Contact</h2>
          <div className="text-center">
            <div className="Contact-heading">You can drop me a line at</div>
            <a className="Email Footer-link">
              <strong>priyanshbalyan</strong> at <strong>gmail</strong> dot com
            </a>
            <div className="Contact-heading">You can find me on</div>
            <div className="Social">
              <a className="Footer-link Social-link" href="https://www.linkedin.com/in/priyanshbalyan/">
                <strong>linkedin</strong>.com/<strong>priyanshbalyan</strong>
              </a>
              <br />
              <a className="Footer-link Social-link" href="http://github.com/priyanshbalyan">
                <strong>github</strong>.com/<strong>priyanshbalyan</strong>
              </a>
              <br />
              <a className="Footer-link Social-link" href="http://codepen.io/priyanshbalyan">
                <strong>codepen</strong>.io/<strong>priyanshbalyan</strong>
              </a>
              <br />
              <a
                className="Footer-link Social-link"
                href="https://docs.google.com/document/d/1Aimw-h4wFM6_kSxg8RYiK8f76Qp4JmUf6zPI-J1wFOM/edit?usp=sharing"
              >
                <strong>Resume</strong>
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
      <div className="Scene--bottom">
        <canvas className="Scene-mountains Scene-mountains--bottom"></canvas>
      </div>
    </div>
  );
}
