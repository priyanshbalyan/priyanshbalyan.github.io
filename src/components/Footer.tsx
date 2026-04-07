export default function Footer() {
  return (
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
  );
}
