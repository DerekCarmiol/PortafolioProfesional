import { ArrowDown, ArrowRight, Braces, CodeXml, Database, Download, ExternalLink, GitFork, GraduationCap, Languages, Link, Mail, MapPin, MessageCircle, UsersRound, Wrench } from "lucide-react";
import { anchors, content } from "../lib/content";
import type { Locale } from "../lib/projects";
import { contactEndpoint, siteAssets } from "../lib/site";
import { ContactForm, Gallery, HeroArt, Navigation, RevealOnScroll, ScrollTop } from "./interactions";

const email = "derek.carmiol@gmail.com";
const gmail = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`;
const linkedin = "https://www.linkedin.com/in/derekcarmiol";
const github = "https://github.com/DerekCarmiol";

export function Portfolio({ locale }: { locale: Locale }) {
  const t = content[locale];
  const assets = siteAssets(locale);
  const primaryCV = assets.cv[0];
  const whatsapp = `https://wa.me/50684863394?text=${encodeURIComponent(t.whatsMessage)}`;
  const skills = [
    { Icon: CodeXml, values: ["Java", "C#", "JavaScript", "HTML5", "CSS3"] },
    { Icon: Braces, values: [".NET", "React", "Angular", "Spring Boot"] },
    { Icon: Database, values: ["SQL", "SQL Server"] },
    { Icon: Wrench, values: ["Git", "GitHub", "Visual Studio"] },
  ];

  return (
    <>
      <a href="#contenido" className="skip">{t.skip}</a>
      <Navigation locale={locale} logo={assets.logo} />
      <main id="contenido" tabIndex={-1}>
        <section id="inicio" className="hero" aria-labelledby="main-title" tabIndex={-1}>
          {assets.background && <div className="hero-backdrop" aria-hidden="true" style={{ backgroundImage: `url(${assets.background})` }} />}
          <div className="shell hero-layout">
            <div className="hero-copy">
              <p className="hero-role">{t.role}</p>
              <h1 id="main-title" tabIndex={-1}>Derek<br />Carmiol<span className="accent">.</span></h1>
              <p className="hero-slogan">{t.slogan}</p>
              <p className="hero-intro">{t.intro}</p>
              <div className="hero-actions">
                <a className="button button-red" href="#proyectos">{t.work}<ArrowRight size={17} aria-hidden="true" /></a>
                <a className="button button-outline" href={primaryCV?.href ?? "#curriculum"} download={primaryCV ? true : undefined}>
                  {primaryCV ? <Download size={17} aria-hidden="true" /> : <ArrowDown size={17} aria-hidden="true" />}
                  {primaryCV ? t.downloadResume : t.viewResume}
                </a>
              </div>
              <p className="hero-location"><MapPin aria-hidden="true" size={16} />{t.location}</p>
            </div>
            <HeroArt />
          </div>
        </section>

        <section id="sobre-mi" className="about light-section" aria-labelledby="about-title" tabIndex={-1}>
          <div className="shell">
            <div className="about-grid">
              <div>
                <h2 id="about-title">{t.aboutTitle}<span className="accent">.</span></h2>
                <p className="section-lead">{t.about}</p>
              </div>
              <div className="about-facts" data-reveal>
                <div><GraduationCap aria-hidden="true" /><div><h3>{t.education}</h3><p><strong>{t.degree}</strong><br />{t.studyDates}</p><p>{t.highSchool}</p></div></div>
                <div><Languages aria-hidden="true" /><div><h3>{t.languages}</h3><p>{t.proficiency}</p></div></div>
              </div>
            </div>
            <div className="about-statements">
              <details><summary>{t.missionTitle}</summary><p>{t.mission}</p></details>
              <details><summary>{t.visionTitle}</summary><p>{t.vision}</p></details>
            </div>
          </div>
        </section>

        <section id="habilidades" className="skills" aria-labelledby="skills-title" tabIndex={-1}>
          <div className="shell">
            <h2 id="skills-title">{t.skillsTitle}<span className="accent">.</span></h2>
            <p className="section-lead">{t.skillsIntro}</p>
            <div className="skill-grid">
              {skills.map(({ Icon, values }, index) => (
                <article className="skill-card" key={t.skills[index]} data-reveal>
                  <h3><Icon aria-hidden="true" size={22} />{t.skills[index]}</h3>
                  <ul className="chips">{values.map((item) => <li key={item}>{item}</li>)}</ul>
                </article>
              ))}
            </div>
            <article className="people-skills" data-reveal>
              <h3><UsersRound aria-hidden="true" size={22} />{t.skills[4]}</h3>
              <ul className="chips">{t.people.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
          </div>
        </section>

        <section id="proyectos" className="projects light-section" aria-labelledby="projects-title" tabIndex={-1}>
          <div className="shell">
            <h2 id="projects-title">{t.projectsTitle}<span className="accent">.</span></h2>
            <p className="section-lead">{t.projectsIntro}</p>
            <Gallery locale={locale} />
          </div>
        </section>

        <section id="contacto" className="contact" aria-labelledby="contact-title" tabIndex={-1}>
          <div className="shell contact-layout">
            <div>
              <h2 id="contact-title">{t.contactTitle}<span className="accent">.</span></h2>
              <p className="section-lead">{t.contactIntro}</p>
              <ul className="contact-links" data-reveal>
                <li><a href={gmail} target="_blank" rel="noopener noreferrer"><Mail aria-hidden="true" size={19} />{t.gmailLink}</a></li>
                <li><a href={whatsapp}><MessageCircle aria-hidden="true" size={19} />{t.whatsapp}</a></li>
                <li><a href={github}><GitFork aria-hidden="true" size={19} />GitHub</a></li>
                <li><a href={linkedin}><Link aria-hidden="true" size={19} />LinkedIn</a></li>
              </ul>
              <a className="contact-address" href={`mailto:${email}`}>{email}</a>
              <div className="resume" id="curriculum" tabIndex={-1}>
                <h3>{t.resume}</h3>
                {assets.cv.length ? (
                  <ul className="cv-list">
                    {assets.cv.map(({ label, href }) => (
                      <li key={label}>
                        <a href={href} target="_blank" rel="noopener noreferrer">
                          <ExternalLink size={17} aria-hidden="true" />{t.openResume} {label} ({locale.toUpperCase()})
                        </a>
                        <a href={href} download>
                          <Download size={17} aria-hidden="true" />{t.download} {label} ({locale.toUpperCase()})
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : <p>{t.cvMissing}</p>}
              </div>
            </div>
            <ContactForm locale={locale} ready={Boolean(contactEndpoint())} />
          </div>
        </section>
      </main>
      <footer>
        <div className="shell footer-layout">
          <div><a href="#inicio" className="wordmark">Derek Carmiol<span className="accent">.</span></a><p>{t.footer}</p></div>
          <nav aria-label={t.footerMenu}>{anchors.slice(1).map((anchor, index) => <a key={anchor} href={`#${anchor}`}>{t.nav[index + 1]}</a>)}</nav>
        </div>
      </footer>
      <RevealOnScroll />
      <ScrollTop label={t.top} />
    </>
  );
}
