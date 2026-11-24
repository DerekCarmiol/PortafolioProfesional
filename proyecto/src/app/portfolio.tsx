import { Braces, CodeXml, Database, Download, GitFork, GraduationCap, Languages, Link, Mail, MapPin, MessageCircle, UsersRound, Wrench } from "lucide-react";
import { anchors, content } from "../lib/content";
import type { Locale } from "../lib/projects";
import { contactReady, siteAssets } from "../lib/site";
import { ContactForm, Gallery, HeroArt, Navigation, ScrollTop } from "./interactions";

const email = "mailto:derek.carmiol@gmail.com";
const linkedin = "https://www.linkedin.com/in/derekcarmiol";
const github = "https://github.com/DerekCarmiol";

export function Portfolio({ locale }: { locale: Locale }) {
  const t = content[locale];
  const assets = siteAssets(locale);
  const whatsapp = `https://wa.me/50684863394?text=${encodeURIComponent(t.whatsMessage)}`;
  const skills = [
    { Icon: CodeXml, values: ["Java", "C#", "JavaScript", "HTML5", "CSS3"] },
    { Icon: Braces, values: [".NET", "React", "Angular", "Spring Boot"] },
    { Icon: Database, values: ["SQL", "SQL Server"] },
    { Icon: Wrench, values: ["Git", "GitHub", "Visual Studio"] },
    { Icon: UsersRound, values: t.people },
  ];

  return (
    <>
      <a href="#contenido" className="skip">{t.skip}</a>
      <Navigation locale={locale} logo={assets.logo} />
      <main id="contenido">
        <section id="inicio" className="hero" aria-labelledby="main-title" style={assets.background ? { backgroundImage: `linear-gradient(90deg, #252525f5, #252525a8), url(${assets.background})` } : undefined}>
          <div className="shell hero-layout">
            <div className="hero-copy">
              <p className="hero-role">{t.role}</p>
              <h1 id="main-title" tabIndex={-1}>Derek<br />Carmiol<span className="accent">.</span></h1>
              <p className="hero-slogan">{t.slogan}</p>
              <p className="hero-intro">{t.intro}</p>
              <div className="hero-actions">
                <a className="button button-red" href="#proyectos">{t.work}</a>
                <a className="button button-outline" href={assets.cv[0]?.href ?? "#curriculum"} download={assets.cv[0] ? true : undefined}><Download size={17} aria-hidden="true" />{t.resume}</a>
              </div>
              <p className="hero-location"><MapPin aria-hidden="true" size={16} />{t.location}</p>
            </div>
            <HeroArt />
          </div>
        </section>

        <section id="sobre-mi" className="about light-section" aria-labelledby="about-title">
          <div className="shell">
            <div className="about-grid">
              <div>
                <h2 id="about-title">{t.aboutTitle}<span className="accent">.</span></h2>
                <p className="section-lead">{t.about}</p>
              </div>
              <div className="about-facts">
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

        <section id="habilidades" className="skills" aria-labelledby="skills-title">
          <div className="shell">
            <h2 id="skills-title">{t.skillsTitle}<span className="accent">.</span></h2>
            <p className="section-lead">{t.skillsIntro}</p>
            <div className="skill-grid">
              {skills.map(({ Icon, values }, index) => (
                <article className="skill-card" key={t.skills[index]}>
                  <h3><Icon aria-hidden="true" size={22} />{t.skills[index]}</h3>
                  <ul className="chips">{values.map((item) => <li key={item}>{item}</li>)}</ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="proyectos" className="projects light-section" aria-labelledby="projects-title">
          <div className="shell">
            <h2 id="projects-title">{t.projectsTitle}<span className="accent">.</span></h2>
            <p className="section-lead">{t.projectsIntro}</p>
            <Gallery locale={locale} />
          </div>
        </section>

        <section id="contacto" className="contact" aria-labelledby="contact-title">
          <div className="shell contact-layout">
            <div>
              <h2 id="contact-title">{t.contactTitle}<span className="accent">.</span></h2>
              <p className="section-lead">{t.contactIntro}</p>
              <ul className="contact-links">
                <li><a href={email}><Mail aria-hidden="true" size={19} />{t.emailLink}</a></li>
                <li><a href={whatsapp}><MessageCircle aria-hidden="true" size={19} />{t.whatsapp}</a></li>
                <li><a href={github}><GitFork aria-hidden="true" size={19} />GitHub</a></li>
                <li><a href={linkedin}><Link aria-hidden="true" size={19} />LinkedIn</a></li>
              </ul>
              <div className="resume" id="curriculum">
                <h3>{t.resume}</h3>
                {assets.cv.length ? (
                  <ul className="cv-list">{assets.cv.map(({ label, href }) => <li key={label}><a href={href} download><Download size={17} aria-hidden="true" />{t.download} {label} ({locale.toUpperCase()})</a></li>)}</ul>
                ) : <p>{t.cvMissing}</p>}
              </div>
            </div>
            <ContactForm locale={locale} ready={contactReady()} />
          </div>
        </section>
      </main>
      <footer>
        <div className="shell footer-layout">
          <div><a href="#inicio" className="wordmark">Derek Carmiol<span className="accent">.</span></a><p>{t.footer}</p></div>
          <nav aria-label={t.menu}>{anchors.slice(1).map((anchor, index) => <a key={anchor} href={`#${anchor}`}>{t.nav[index + 1]}</a>)}</nav>
        </div>
      </footer>
      <ScrollTop label={t.top} />
    </>
  );
}
