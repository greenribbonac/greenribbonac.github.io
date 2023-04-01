import { format } from "prettier";
import { renderToStaticMarkup } from "react-dom/server";

import { SponsorList } from "../components/SponsorList.js";

import sponsors from "../resources/sponsorship.json" assert { type: "json" };

const html = renderToStaticMarkup(<SponsorList sponsors={sponsors} />);
const formatted = format(html, { parser: "html" });
console.log(formatted);
