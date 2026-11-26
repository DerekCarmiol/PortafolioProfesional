"use client";

import { useEffect, useRef, useState, type MouseEvent } from "react";
import { ArrowRight, ArrowUp, Menu, X } from "lucide-react";
import { useForm } from "react-hook-form";
import { anchors, content } from "../lib/content";
import { emailPattern, inRange, limits } from "../lib/contact";
import { projects, type Locale } from "../lib/projects";
import { DeveloperArt, ProjectArt } from "./illustrations";
import motion from "./motion.json";

export function Navigation({ locale, logo }: { locale: Locale; logo?: string }) {
  const t = content[locale];
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(anchors[0]);
  const toggle = useRef<HTMLButtonElement>(null);
  const header = useRef<HTMLElement>(null);
  const navigation = useRef<HTMLElement>(null);
  const progress = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const sections = anchors.map((anchor) => document.getElementById(anchor))
      .filter((section): section is HTMLElement => section !== null);
    const bar = progress.current;
    const sticky = header.current;
    if (!bar || !sticky || !sections.length) return;
    const progressBar = bar;
    const stickyHeader = sticky;

    let frame = 0;
    let sectionTops: number[] = [];
    let scrollRange = 0;
    let activationOffset = 0;
    let layoutChanged = true;
    let current = sections[0].id;

    function update() {
      frame = 0;
      const position = window.scrollY;
      if (layoutChanged) {
        sectionTops = sections.map((section) => section.getBoundingClientRect().top + position);
        scrollRange = document.documentElement.scrollHeight - window.innerHeight;
        activationOffset = stickyHeader.offsetHeight + 36;
        layoutChanged = false;
      }

      const edge = position + activationOffset;
      const atBottom = scrollRange > 0 && position >= scrollRange - 2;
      const nextSection = sectionTops.findIndex((top) => top > edge);
      const index = atBottom || nextSection === -1 ? sections.length - 1 : Math.max(0, nextSection - 1);
      const next = sections[index].id;
      if (next !== current) {
        current = next;
        setActive(next);
      }

      const ratio = scrollRange > 0 ? Math.min(1, Math.max(0, position / scrollRange)) : 0;
      progressBar.style.transform = `scaleX(${ratio})`;
    }

    function queueUpdate() {
      if (!frame) frame = requestAnimationFrame(update);
    }

    function measure() {
      layoutChanged = true;
      queueUpdate();
    }

    const observer = typeof ResizeObserver === "undefined" ? undefined : new ResizeObserver(measure);
    [stickyHeader, ...sections].forEach((element) => observer?.observe(element));
    window.addEventListener("resize", measure);
    window.addEventListener("scroll", queueUpdate, { passive: true });
    queueUpdate();

    return () => {
      observer?.disconnect();
      window.removeEventListener("resize", measure);
      window.removeEventListener("scroll", queueUpdate);
      cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    if (open) navigation.current?.querySelector<HTMLAnchorElement>("a")?.focus();
  }, [open]);

  function followAnchor(event: MouseEvent<HTMLAnchorElement>, anchor: string) {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    if (open || event.detail === 0) document.getElementById(anchor)?.focus({ preventScroll: true });
    setOpen(false);
  }

  return (
    <header ref={header} className="header" onKeyDown={(event) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
        toggle.current?.focus();
      }
    }}>
      <div className="shell header-inner">
        <a href="#inicio" className="wordmark" onClick={(event) => followAnchor(event, "inicio")}>
          {logo && <span className="brand-image" aria-hidden="true" style={{ backgroundImage: `url(/${logo})` }} />}
          <span>Derek Carmiol<span className="accent">.</span></span>
        </a>
        <nav ref={navigation} id="site-navigation" className="navigation" data-open={open} aria-label={t.menu}>
          {anchors.map((anchor, index) => (
            <a key={anchor} href={`#${anchor}`} aria-current={active === anchor ? "location" : undefined} onClick={(event) => followAnchor(event, anchor)}>{t.nav[index]}</a>
          ))}
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
      <span ref={progress} className="reading-progress" aria-hidden="true" />
    </header>
  );
}

export function HeroArt() {
  const panel = useRef<SVGGElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  const halo = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const surface = stage.current;
    const light = halo.current;
    let animation: Animation | undefined;
    let frame = 0;
    let pointerX = 0;
    let pointerY = 0;

    function resetLight() {
      cancelAnimationFrame(frame);
      frame = 0;
      light?.style.removeProperty("transform");
    }

    function updateMotion() {
      animation?.cancel();
      if (!preference.matches && typeof panel.current?.animate === "function") {
        animation = panel.current.animate(motion.keyframes, motion.options);
      }
      resetLight();
    }

    function moveLight(event: PointerEvent) {
      if (preference.matches || !finePointer.matches || event.pointerType !== "mouse") return;
      pointerX = event.clientX;
      pointerY = event.clientY;
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        if (!surface || !light) return;
        const bounds = surface.getBoundingClientRect();
        const x = ((pointerX - bounds.left) / bounds.width - 0.5) * 72;
        const y = ((pointerY - bounds.top) / bounds.height - 0.5) * 48;
        light.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      });
    }

    updateMotion();
    preference.addEventListener("change", updateMotion);
    finePointer.addEventListener("change", resetLight);
    surface?.addEventListener("pointermove", moveLight, { passive: true });
    surface?.addEventListener("pointerleave", resetLight);
    return () => {
      preference.removeEventListener("change", updateMotion);
      finePointer.removeEventListener("change", resetLight);
      surface?.removeEventListener("pointermove", moveLight);
      surface?.removeEventListener("pointerleave", resetLight);
      animation?.cancel();
      resetLight();
    };
  }, []);
  return (
    <div className="hero-stage" ref={stage} aria-hidden="true">
      <div className="hero-halo" ref={halo} />
      <DeveloperArt panel={panel} />
    </div>
  );
}

export function RevealOnScroll() {
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver((entries) => {
      for (const { target, isIntersecting } of entries) {
        if (!isIntersecting) continue;
        observer.unobserve(target);
        if (!preference.matches) target.classList.add("is-revealed");
      }
    }, { threshold: 0.12 });

    document.querySelectorAll("[data-reveal]").forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
  return null;
}

export function Gallery({ locale }: { locale: Locale }) {
  const t = content[locale];
  const [filter, setFilter] = useState(0);
  const [selected, setSelected] = useState<(typeof projects)[number]>();
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const featuredId = "billetera";
  const visible = projects.filter((project) => filter === 0 || (filter === 1 ? project.area === "apps" : project.area === "data"));
  if (filter === 0) visible.sort((a, b) => Number(b.id === featuredId) - Number(a.id === featuredId));

  useEffect(() => {
    if (selected && !dialog.current?.open) dialog.current?.showModal();
  }, [selected]);

  return (
    <>
      <div className="filters" role="group" aria-label={t.filterLabel}>
        {t.filters.map((label, index) => <button type="button" key={label} aria-pressed={filter === index} onClick={() => setFilter(index)}>{label}</button>)}
      </div>
      <p className="visually-hidden" role="status">{t.projectCount(visible.length)}</p>
      <div className="project-grid">
        {visible.map((project) => (
          <article key={project.id} className="project-card" data-featured={filter === 0 && project.id === featuredId} data-reveal>
            <div className={`project-image project-image-${project.id}`}><ProjectArt id={project.id} /></div>
            <div className="project-copy">
              <p className="project-area">{t.filters[project.area === "apps" ? 1 : 2]}{project.proposed && ` · ${t.proposed}`}</p>
              <h3>{project[locale].title}</h3>
              <p>{project[locale].summary}</p>
              {project.stack.length > 0 && <ul className="chips project-stack" aria-label={t.tools}>{project.stack.map((item) => <li key={item}>{item}</li>)}</ul>}
              <button type="button" className="text-button" aria-haspopup="dialog" aria-label={`${t.projectDetail} · ${project[locale].title}`} onClick={(event) => {
                trigger.current = event.currentTarget;
                setSelected(project);
              }}>{t.projectDetail}<ArrowRight aria-hidden="true" size={17} /></button>
            </div>
          </article>
        ))}
      </div>
      <dialog ref={dialog} className="project-dialog" aria-labelledby={selected ? "project-title" : undefined} onClose={() => {
        setSelected(undefined);
        trigger.current?.focus();
      }}>
        <button className="dialog-close" type="button" aria-label={t.close} onClick={() => dialog.current?.close()}><X aria-hidden="true" size={22} /></button>
        {selected && <>
          <div className={`project-image project-image-${selected.id}`}><ProjectArt id={selected.id} /></div>
          <div className="dialog-copy">
            <p className="project-area">{t.filters[selected.area === "apps" ? 1 : 2]}{selected.proposed && ` · ${t.proposed}`}</p>
            <h3 id="project-title">{selected[locale].title}</h3>
            <p>{selected[locale].detail}</p>
            {selected[locale].contribution && <><h4>{t.contribution}</h4><p>{selected[locale].contribution}</p></>}
            {selected.stack.length > 0 && <><h4>{t.tools}</h4><ul className="chips project-stack">{selected.stack.map((item) => <li key={item}>{item}</li>)}</ul></>}
          </div>
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

  const status = !ready ? "unavailable" : isSubmitting ? "sending" : result;

  return <form className="contact-form" onSubmit={handleSubmit(send)} noValidate>
    <fieldset disabled={!ready || isSubmitting} aria-busy={isSubmitting} aria-describedby={!ready ? "contact-status" : undefined}>
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
      <button type="submit" className="button button-red">{t.send}</button>
    </fieldset>
    <p id="contact-status" data-state={status ?? "idle"} role="status">{status && t[status]}</p>
  </form>;
}

export function ScrollTop({ label }: { label: string }) {
  const [visible, setVisible] = useState(false);
  const button = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const control = button.current;
    const form = document.querySelector(".contact-form");
    if (!control) return;
    let frame = 0;

    function update() {
      frame = 0;
      if (window.scrollY <= 480) {
        setVisible(false);
        return;
      }

      const buttonRect = control?.getBoundingClientRect();
      const formRect = form?.getBoundingClientRect();
      const overlaps = buttonRect && formRect
        && buttonRect.left < formRect.right && buttonRect.right > formRect.left
        && buttonRect.top < formRect.bottom && buttonRect.bottom > formRect.top;
      setVisible(!overlaps);
    }

    function queueUpdate() {
      if (!frame) frame = requestAnimationFrame(update);
    }

    const observer = typeof ResizeObserver !== "undefined" && form ? new ResizeObserver(queueUpdate) : undefined;
    if (form) observer?.observe(form);
    queueUpdate();
    window.addEventListener("scroll", queueUpdate, { passive: true });
    window.addEventListener("resize", queueUpdate);
    return () => {
      observer?.disconnect();
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", queueUpdate);
      window.removeEventListener("resize", queueUpdate);
    };
  }, []);

  return <button ref={button} type="button" className="scroll-top" data-visible={visible} aria-label={label} onClick={() => {
    document.getElementById("main-title")?.focus({ preventScroll: true });
    window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
  }}><ArrowUp aria-hidden="true" size={21} /></button>;
}
