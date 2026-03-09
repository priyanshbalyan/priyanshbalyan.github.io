

type LinkItem = {
  label: string;
  link: string;
};

type WorkProps = {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  video?: string;
  links: LinkItem[];
};

export default function Work({ title, subtitle, description, image, video, links }: WorkProps) {
  const mainLink = links && links.length > 0 ? links[0].link : null;

  const content = (
    <figure className="Work-image js-Lazyload" data-image={image} data-hires="true" role="presentation">
      <video className="Work-video" preload="metadata" playsInline webkit-playsinline="true" loop muted>
        <source src={`video/${video}.mp4`} />
      </video>
    </figure>
  );

  return (
    <article className="Work">
      <div className="Work-text">
        <h3 className="Work-title">
          {title}
          <div className="Work-subtitle">{subtitle}</div>
        </h3>
        {/* Using dangerouslySetInnerHTML because description contains HTML like <strong> or links */}
        <p className="Work-description" dangerouslySetInnerHTML={{ __html: description }}></p>
        <div className="Work-links">
          {links && links.map((item, i) => (
            <a key={i} className="Work-link" href={item.link}>
              {item.label}
            </a>
          ))}
        </div>
      </div>
      {mainLink ? <a href={mainLink}>{content}</a> : content}
    </article>
  );
}
