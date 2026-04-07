

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
    <figure 
      className="relative w-full aspect-[4/3] bg-brand-purple/10 border-[6px] border-white rounded-[2px] shadow-[1px_4px_25px_rgba(117,81,125,0.15)] overflow-hidden shrink-0 md:w-[400px] js-Lazyload" 
      data-image={image} 
      data-hires="true" 
      role="presentation"
    >
      {video && (
        <video 
          className="absolute inset-0 w-full h-full object-cover Work-video" 
          preload="metadata" 
          playsInline 
          webkit-playsinline="true" 
          loop 
          muted
        >
          <source src={`video/${video}.mp4`} />
        </video>
      )}
    </figure>
  );

  return (
    <article className="group flex flex-col mb-[60px] last:mb-[30px] max-md:pt-[260px] max-md:relative max-md:mb-[60px] md:flex-row md:items-center md:even:flex-row-reverse">
      <div className="w-full text-center mb-6 md:w-1/2 md:mb-0 md:px-[25px] md:text-left md:group-even:text-right max-md:text-[16px]">
        <h3 className="font-sans font-bold text-[30px] leading-tight m-0">
          {title}
          <div className="work-subtitle">{subtitle}</div>
        </h3>
        <p 
          className="mt-[1em] mb-[1.2em] text-[20px] max-md:text-[16px]" 
          dangerouslySetInnerHTML={{ __html: description }}
        ></p>
        <div className="flex flex-wrap gap-2 justify-center md:justify-start md:group-even:justify-end">
          {links && links.map((item, i) => (
            <a key={i} className="work-link" href={item.link}>
              {item.label}
            </a>
          ))}
        </div>
      </div>
      
      <div className="w-full flex justify-center md:w-1/2 md:relative md:z-10 max-md:absolute max-md:top-0 max-md:left-1/2 max-md:-ml-[156px] max-md:w-[300px]">
        {mainLink ? <a href={mainLink} className="w-full flex justify-center">{content}</a> : <div className="w-full flex justify-center">{content}</div>}
      </div>
    </article>
  );
}
