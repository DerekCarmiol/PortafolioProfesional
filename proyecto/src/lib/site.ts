import { existsSync } from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import { content } from "./content";
import type { Locale } from "./projects";

const publicPath = (file: string) => existsSync(path.join(process.cwd(), "public", file));

export function contactEndpoint() {
  // Formspree form IDs are public. Local and preview builds can use a separate form.
  const productionFormId = process.env.VERCEL_ENV === "production" ? "xljbvvwk" : undefined;
  const formId = process.env.FORMSPREE_FORM_ID?.trim() || process.env.NEXT_PUBLIC_FORM?.trim() || productionFormId;
  return formId && /^[A-Za-z0-9]+$/.test(formId) ? `https://formspree.io/f/${formId}` : undefined;
}

export function siteAssets(locale: Locale) {
  const language = locale.toUpperCase();
  return {
    logo: ["brand/logo.svg", "brand/logo.png"].find(publicPath),
    background: publicPath("brand/fondo.jpg") ? "/brand/fondo.jpg" : undefined,
    cv: ["ATS", "Visual"].flatMap((label) => {
      const file = `cv/CV_Derek_Carmiol_${label}_${language}.pdf`;
      return publicPath(file) ? [{ label, href: `/${file}` }] : [];
    }),
  };
}

export function metadataFor(locale: Locale): Metadata {
  const title = `Derek Carmiol | ${content[locale].role}`;
  const description = content[locale].intro;
  const siteUrl = process.env.SITE_URL;
  const icon = ["brand/favicon.ico", "brand/favicon.svg", "brand/favicon.png"].find(publicPath);
  const tabIcon = "brand/favicon-tab.svg";
  const icons = [
    ...(icon ? [`/${icon}`] : []),
    ...(publicPath(tabIcon) ? [{ url: `/${tabIcon}`, type: "image/svg+xml", sizes: "any" }] : []),
  ];
  return {
    title, description,
    ...(icons.length > 0 && { icons: { icon: icons } }),
    ...(siteUrl && {
      metadataBase: new URL(siteUrl),
      alternates: { canonical: locale === "es" ? "/" : "/en", languages: { es: "/", en: "/en" } },
      openGraph: { title, description, url: locale === "es" ? "/" : "/en", locale: locale === "es" ? "es_CR" : "en_US", type: "website" },
    }),
  };
}
