import Script from 'next/script';
import Work from '@/components/Work';
import React from 'react';

export default function Home() {
  return (
    <>
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

      {/* WebGL Shaders injected inline as they were before */}
      <Script
         id="vs"
         type="x-shader/vertex"
         dangerouslySetInnerHTML={{
             __html: `attribute vec3 position;void main(){gl_Position=vec4(position,1.0);}`
         }}
      />
      <Script
         id="fs"
         type="x-shader/fragment"
         dangerouslySetInnerHTML={{
             __html: `
                uniform float t;
                uniform float s;
                uniform float sunSize;
                uniform vec2 r;
                uniform sampler2D i;

                float power(float value,float p){
                  float f=floor(value);
                  float r=value-f;
                  if(r>0.5){
                    r=(r*2.0)-1.0;
                    r=pow(r,1.0/p);
                    r=(r/2.0)+0.5;
                  }else{
                    r*=2.0;
                    r=pow(r,p);
                    r/=2.0;
                  }
                  return r+f;
                }
                vec3 getDisplacement(float dist){
                  float global=(dist*6.0)-t*0.9;
                  float distortion=(sin(global*2.0-(t*0.5))+1.0)*0.55;
                  float distorted=global-(distortion*0.45);
                  float local=distorted-floor(distorted);
                  float stripedDistance=mod(local*4.0,1.0);
                  float striped=(power(local*4.0,12.0)+-0.4)/4.0;
                  return vec3(striped,stripedDistance,local);
                }
                void main(){
                  vec2 pos=gl_FragCoord.xy/r;
                  pos.y-=0.5/r.y;
                  pos=vec2(pos.x,1.0-pos.y);
                  if(pos.y>0.5){
                    float dist=(pos.y-0.5)/0.5;
                    vec3 displacement=getDisplacement(dist);
                    float w=displacement.x;
                    pos.y+=w*0.35*dist*s;
                  }else{
                    float sunDistance=(sunSize/r.x)*0.75;
                    float falloff=2.5;
                    falloff=1.0+falloff;
                    float p=1.0-(abs(pos.x-0.5)/(sunDistance*falloff));
                    if(p>0.0){
                      float cutoff=1.0-(1.0/falloff);
                      if(p>cutoff){
                        p=1.0;
                      }else{
                        p=(p/cutoff);
                        p=pow(p,2.0);
                        p*=0.2;
                      }
                      pos.x+=sin((t*7.0)+(pos.y*150.0))*(sunDistance*0.1)*p*s;
                    }
                  }
                  vec4 textureColor=texture2D(i,pos);
                  float a=textureColor.a;
                  if(a<1.0){
                    vec3 matte=vec3(1.0,0.92,0.85);
                    float a2=a*1.0;
                    float sunDistance=(sunSize/r.x)*0.85;
                    float p=1.0-(abs(pos.x-0.5)/sunDistance);
                    if(p>0.0){
                      a2=a*0.0;
                    }
                    textureColor=vec4((textureColor.rgb*a2)+(matte*(1.0-a2)),a);
                  }
                  gl_FragColor=vec4(textureColor.rgb*textureColor.a,textureColor.a);
                }
             `
         }}
      />
      {/* Native app JavaScript. Loaded interactively so that DOM element targets like Canvas are ready */}
      <Script src="js/main.js" strategy="lazyOnload" />
    </>
  );
}
