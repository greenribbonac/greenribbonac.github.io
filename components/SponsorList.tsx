import type { ReactElement, ReactNode } from "react";

interface SponsorType {
  name: string;
  url: string;
}

function Sponsor({ name, url }: SponsorType): ReactElement {
  if (!url) {
    return <>{name}</>;
  }
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="icn-window"
    >
      {name}
    </a>
  );
}

export function SponsorList({
  sponsors,
}: {
  sponsors: SponsorType[];
}): ReactElement {
  return (
    <ul className="partner__list flexbox flex-justify-between flex-wrap flex-align-center">
      {sponsors.map((sponsor) => (
        <li className="partner__item" key={sponsor.name}>
          <Sponsor {...sponsor} />
        </li>
      ))}
    </ul>
  );
}
