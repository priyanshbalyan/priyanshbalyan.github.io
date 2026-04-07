export default function Header() {
  return (
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
  );
}
