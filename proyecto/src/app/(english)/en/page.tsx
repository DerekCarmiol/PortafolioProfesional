import { Portfolio } from "../../portfolio";
import { metadataFor } from "../../../lib/site";

export const metadata = metadataFor("en");

export default function EnglishPage() {
  return <Portfolio locale="en" />;
}
