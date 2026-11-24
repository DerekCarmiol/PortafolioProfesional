"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUp, Menu, X } from "lucide-react";
import { useForm } from "react-hook-form";
import { anchors, content } from "../lib/content";
import { emailPattern, inRange, limits } from "../lib/contact";
import { projects, type Locale } from "../lib/projects";
import { DeveloperArt, ProjectArt } from "./illustrations";
import motion from "./motion.json";


export function Navigation({ locale, logo }: { locale: Locale; logo?: string }) {
  const t = content[locale];
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);

  return (
    <header className="header" onKeyDown={(event) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
        toggle.current?.focus();
      }
    }}>
      <div className="shell header-inner">
        <a href="#inicio" className="wordmark" onClick={() => setOpen(false)}>
          {logo && <span className="brand-image" style={{ backgroundImage: `url(/${logo})` }} />}
          <span>Derek Carmiol<span className="accent">.</span></span>
        </a>
        <nav id="site-navigation" className="navigation" data-open={open} aria-label={t.menu}>
          {anchors.map((anchor, index) => <a key={anchor} href={`#${anchor}`} onClick={() => setOpen(false)}>{t.nav[index]}</a>)}
        </nav>
        <div className="header-controls">
          <a href={locale === "es" ? "/en" : "/"} className="language" aria-label={t.language} hrefLang={locale === "es" ? "en" : "es"} onClick={(event) => {
            if (event.button === 0 && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey && window.location.hash) {
              event.preventDefault();
              window.location.assign(event.currentTarget.href + window.location.hash);
            }
          }}>
            <span className={locale === "es" ? "selected" : ""}>ES</span><span aria-hidden="true">/</span><span className={locale === "en" ? "selected" : ""}>EN</span>
          </a>
          <button ref={toggle} className="menu-toggle" type="button" aria-label={t.menu} aria-controls="site-navigation" aria-expanded={open} onClick={() => setOpen(!open)}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
    </header>
  );
}

export function HeroArt() {
  const panel = useRef<SVGGElement>(null);
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let animation: Animation | undefined;
    function updateMotion() {
      animation?.cancel();
      if (!preference.matches && typeof panel.current?.animate === "function") {
        animation = panel.current.animate(motion.keyframes, motion.options);
      }
    }
    updateMotion();
    preference.addEventListener("change", updateMotion);
    return () => {
      preference.removeEventListener("change", updateMotion);
      animation?.cancel();
    };
  }, []);
  return <DeveloperArt panel={panel} />;
}

export function Gallery({ locale }: { locale: Locale }) {
  const t = content[locale];
  const [filter, setFilter] = useState(0);
  const [selected, setSelected] = useState<(typeof projects)[number]>();
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const visible = projects.filter((project) => filter === 0 || (filter === 1 ? project.area === "apps" : project.area === "data"));

  return (
    <>
      <div className="filters" role="group" aria-label={t.filterLabel}>
        {t.filters.map((label, index) => <button type="button" key={label} aria-pressed={filter === index} onClick={() => setFilter(index)}>{label}</button>)}
      </div>
      <div className="project-grid">
        {visible.map((project) => (
          <article key={project.id} className="project-card">
            <div className={`project-image project-image-${project.id}`}><ProjectArt id={project.id} /></div>
            <div className="project-copy">
              <p className="project-area">{t.filters[project.area === "apps" ? 1 : 2]}{project.proposed && ` · ${t.proposed}`}</p>
              <h3>{project[locale].title}</h3>
              <p>{project[locale].summary}</p>
              <button type="button" className="text-button" aria-haspopup="dialog" aria-label={`${t.projectDetail} · ${project[locale].title}`} onClick={(event) => {
                trigger.current = event.currentTarget;
                setSelected(project);
                dialog.current?.showModal();
              }}>{t.projectDetail}</button>
            </div>
          </article>
        ))}
      </div>
      <dialog ref={dialog} className="project-dialog" aria-labelledby="project-title" onClose={() => trigger.current?.focus()}>
        <button className="dialog-close" type="button" aria-label={t.close} onClick={() => dialog.current?.close()}><X size={22} /></button>
        {selected && <>
          <h3 id="project-title">{selected[locale].title}</h3>
          <p>{selected[locale].detail}</p>
          {selected.stack.length > 0 && <><h4>{t.tools}</h4><ul className="chips">{selected.stack.map((item) => <li key={item}>{item}</li>)}</ul></>}
        </>}
      </dialog>
    </>
  );
}

type FormFields = { name: string; email: string; message: string; website: string };
type Result = "success" | "error" | "unavailable";

export function ContactForm({ locale, ready }: { locale: Locale; ready: boolean }) {
  const t = content[locale].form;
  const [result, setResult] = useState<Result | null>(null);
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormFields>();

  async function send(values: FormFields) {
    setResult(null);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (response.ok) {
        reset();
        setResult("success");
      } else {
        setResult(response.status === 503 ? "unavailable" : "error");
      }
    } catch {
      setResult("error");
    }
  }

  return <form className="contact-form" onSubmit={handleSubmit(send)} noValidate>
    <fieldset disabled={!ready || isSubmitting} aria-describedby={!ready ? "contact-status" : undefined}>
      <div className="form-pair">
        <label>{t.name}<input autoComplete="name" maxLength={limits.name[1]} aria-required="true" aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "name-error" : undefined} {...register("name", { validate: (value) => inRange(value.trim(), limits.name) || t.nameError })} />
          {errors.name && <span id="name-error" className="field-error">{errors.name.message}</span>}
        </label>
        <label>{t.email}<input type="email" autoComplete="email" maxLength={254} aria-required="true" aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "email-error" : undefined} {...register("email", { validate: (value) => emailPattern.test(value.trim()) || t.emailError })} />
          {errors.email && <span id="email-error" className="field-error">{errors.email.message}</span>}
        </label>
      </div>
      <label>{t.message}<textarea rows={5} maxLength={limits.message[1]} aria-required="true" aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "message-error" : undefined} {...register("message", { validate: (value) => inRange(value.trim(), limits.message) || t.messageError })} />
        {errors.message && <span id="message-error" className="field-error">{errors.message.message}</span>}
      </label>
      <div hidden><input type="text" tabIndex={-1} autoComplete="off" {...register("website")} /></div>
      <button type="submit" className="button button-red">{isSubmitting ? t.sending : t.send}</button>
    </fieldset>
    <p id="contact-status" role="status">{ready ? result && t[result] : t.unavailable}</p>
  </form>;
}

export function ScrollTop({ label }: { label: string }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const update = () => setVisible(window.scrollY > 480);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  return visible && <button type="button" className="scroll-top" aria-label={label} onClick={() => {
    document.getElementById("main-title")?.focus({ preventScroll: true });
    window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
  }}><ArrowUp size={21} /></button>;
}
