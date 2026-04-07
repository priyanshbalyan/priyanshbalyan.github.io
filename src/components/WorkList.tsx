import Work from './Work';

export default function WorkList() {
  return (
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
  );
}
