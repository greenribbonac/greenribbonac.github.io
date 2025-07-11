import { format } from "prettier";
import { renderToStaticMarkup } from "react-dom/server";

import { SponsorBlock, SponsorType, SponsorCategory } from "../components/SponsorList.js";

import sponsorship from "../resources/sponsorship.json" with { type: "json" }


const categories = ["協賛団体", "自動販売機支援団体", "協力団体"];
const sponsorAlist: SponsorCategory[] = categories.map(category => {
  return sponsorship.reduce<SponsorCategory>((acc, n) => {
    if (n.category === category) {
      acc.sponsors.push({ name: n.name, url: n.url})
    }
    return acc;
  }, { category: category, sponsors: [] });
});


const html = renderToStaticMarkup(<SponsorBlock sponsorAlist={sponsorAlist} />);
const formatted = await format(html, { parser: "html"});
console.log(formatted);
