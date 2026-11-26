import type { RefObject } from "react";

export function DeveloperArt({ panel }: { panel: RefObject<SVGGElement | null> }) {
  return (
    <svg className="developer-art" viewBox="0 0 552 464" fill="none" aria-hidden="true">
      <defs>
        <pattern id="dot-grid" width="19" height="19" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1" fill="#b4b4ba" fillOpacity=".35" />
        </pattern>
        <pattern id="hatch" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line y2="6" stroke="#e63946" strokeOpacity=".45" />
        </pattern>
        <linearGradient id="panel-shade" x1="110" y1="82" x2="425" y2="360" gradientUnits="userSpaceOnUse">
          <stop stopColor="#55484c" />
          <stop offset=".32" stopColor="#393437" />
          <stop offset="1" stopColor="#252326" />
        </linearGradient>
        <linearGradient id="panel-edge" x1="100" y1="104" x2="417" y2="333" gradientUnits="userSpaceOnUse">
          <stop stopColor="#bca8ad" />
          <stop offset=".48" stopColor="#6b5e63" />
          <stop offset="1" stopColor="#c95c67" />
        </linearGradient>
        <linearGradient id="beam" x1="451" y1="0" x2="118" y2="444" gradientUnits="userSpaceOnUse">
          <stop stopColor="#e63946" stopOpacity="0" />
          <stop offset=".42" stopColor="#e63946" stopOpacity=".6" />
          <stop offset="1" stopColor="#e63946" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d="M63 405 424 44h89L152 405z" fill="url(#beam)" opacity=".18" />
      <path d="M18 435 387 66m-238 365L520 60m-267 375L500 188" stroke="url(#beam)" />
      <path d="M59 100h433M59 373h433M106 49v367m331-367v367" stroke="#efefef" strokeOpacity=".13" strokeDasharray="3 6" />
      <path d="M55 59h116v103H55zm331 235h116v106H386z" fill="url(#dot-grid)" />
      <path d="M458 59h44v44h-44zM57 355h34v34H57z" fill="url(#hatch)" opacity=".8" />
      <path d="M54 100h10m-5-5v10m428 268h10m-5-5v10M432 49h10m-5-5v10M101 416h10m-5-5v10" stroke="#e63946" strokeWidth="2" />
      <g ref={panel}>
        <rect x="131" y="130" width="321" height="231" rx="14" fill="#201c20" fillOpacity=".85" stroke="#7c5960" />
        <rect x="114" y="118" width="319" height="230" rx="14" fill="#2a2328" fillOpacity=".92" stroke="#76555c" />
        <path d="M113 104h288a14 14 0 0 1 14 14v202a13 13 0 0 1-13 13H113a13 13 0 0 1-13-13V117a13 13 0 0 1 13-13Z" fill="url(#panel-shade)" stroke="url(#panel-edge)" />
        <path d="M101 141h313" stroke="#796c73" />
        <circle cx="121" cy="123" r="4" fill="#e63946" />
        <circle cx="135" cy="123" r="4" fill="#8c8c91" />
        <circle cx="149" cy="123" r="4" fill="#65656a" />
        <rect x="342" y="119" width="53" height="7" rx="3.5" fill="#515156" />
        <path d="M123 169h4m-4 21h4m-4 21h4m-4 21h4m-4 21h4m-4 21h4m-4 21h4" stroke="#77777c" strokeWidth="3" strokeLinecap="round" />
        <path d="M148 169h66m-47 63h50m-69 63h51" stroke="#fa616d" strokeWidth="5" strokeLinecap="round" />
        <path d="M167 190h81m-58 21h79m-102 42h98m-75 21h55" stroke="#b7b7bd" strokeOpacity=".72" strokeWidth="5" strokeLinecap="round" />
        <path d="M226 169h32m-17 63h24m-9 42h26" stroke="#717176" strokeWidth="5" strokeLinecap="round" />
        <rect x="321" y="182" width="118" height="105" rx="9" fill="#1c161b" fillOpacity=".74" />
        <rect x="315" y="176" width="118" height="105" rx="9" fill="#2d252a" stroke="#e63946" />
        <path d="m356 214-14 15 14 15m35-30 14 15-14 15m-10-34-15 38" stroke="#fa616d" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="415" cy="333" r="3" fill="#e63946" />
      </g>
    </svg>
  );
}

export function ProjectArt({ id }: { id: string }) {
  const drawings: Record<string, React.ReactNode> = {
    veterinaria: <><rect x="76" y="37" width="158" height="110" rx="8"/><path d="M76 65h158m-112-38v22m65-22v22m-88 46h21m17 0h21m17 0h21m-97 24h21m17 0h21"/><path className="accent-stroke" d="M181 116h25m-12-12v24"/></>,
    esports: <><path d="M120 66h70l8 12 18 48c5 20-15 24-24 13l-17-18h-41l-16 18c-10 11-29 6-24-13l18-48z"/><path d="M122 96h27m-13-13v27m19-66v22"/><path className="accent-stroke" d="M181 90h1m12 11h1m-26 0h1m11 11h1"/></>,
    billetera: <><path d="M89 65 192 40a12 12 0 0 1 15 9l4 16M96 65h103a13 13 0 0 1 13 13v55a13 13 0 0 1-13 13H96a13 13 0 0 1-13-13V78a13 13 0 0 1 13-13Z"/><path className="accent-stroke" d="M212 90h-31a14 14 0 0 0 0 28h31m-31-14h1"/></>,
    ebais: <><rect x="72" y="45" width="165" height="103" rx="9"/><path d="M72 68h165m-146-11h1m12 0h1m12 0h1m17 29-18 19 18 19m40-38 18 19-18 19"/><path className="accent-stroke" d="m163 85-16 42"/></>,
    universidad: <><path d="M155 74v17m-50 19V91h100v19"/><rect x="131" y="35" width="48" height="39" rx="5"/><rect x="80" y="110" width="50" height="38" rx="5"/><rect x="180" y="110" width="50" height="38" rx="5"/><path className="accent-stroke" d="M144 54h22m-70 75h18m82 0h18"/></>,
  };

  return (
    <svg className="project-art" viewBox="0 0 310 184" fill="none" aria-hidden="true">
      <path className="art-grid" d="M29 0v184M71 0v184M113 0v184M155 0v184M197 0v184M239 0v184M281 0v184M0 29h310M0 71h310M0 113h310M0 155h310"/>
      <circle cx="155" cy="92" r="74" strokeWidth="1" strokeDasharray="2 6" className="art-grid"/>
      <g strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">{drawings[id]}</g>
    </svg>
  );
}
