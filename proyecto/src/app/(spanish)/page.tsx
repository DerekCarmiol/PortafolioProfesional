import { Portfolio } from "../portfolio";
import { metadataFor } from "../../lib/site";

export const metadata = metadataFor("es");

export default function SpanishPage() {
  return <Portfolio locale="es" />;
}
