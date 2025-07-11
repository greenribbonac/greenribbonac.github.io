import { Fragment, type ReactElement, type ReactNode } from "react";

export interface SponsorType {
  name: string;
  url: string;
}

export interface SponsorCategory {
  category: string;
  sponsors: { name: string; url: string }[];
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

function SponsorList({
  sponsors,
}: {
  sponsors: SponsorType[];
}): ReactElement {
  return (
    <>
      {sponsors.map((sponsor) => (
        <li className="partner__item" key={sponsor.name}>
          <Sponsor {...sponsor} />
        </li>
      ))}
    </>
  );
}

interface SpnosorCategory {
  category: string;
  sponsors: { name: string; url: string }[];
}


export function SponsorBlock({ sponsorAlist }:{
  sponsorAlist: SponsorCategory[]
}): ReactElement {
  return (
    <>
	{sponsorAlist.map(({ category, sponsors }, index) => {
	  // 協賛団体はヘッダーを表示しない
	  return (
	    <Fragment key="category">
	      {index !== 0 &&
		(<><hr className="dotted-devider" />
		   <p className="txt--yugo18 t-center animation-bottom">{category}</p></>)}
              <ul className="partner__list flexbox flex-justify-between flex-wrap flex-align-center">
		<SponsorList sponsors={sponsors} />
              </ul>
	    </Fragment>
	  );
	})}
    </>)
}
