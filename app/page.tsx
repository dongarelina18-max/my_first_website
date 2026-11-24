import { ArrowRight, Download, Github, Linkedin, Mail, MapPin, Phone, Award, ExternalLink, Sparkles } from "lucide-react";
import Nav from "@/components/Nav";
import Section from "@/components/Section";
import { about, certifications, education, experience, interests, profile, projects, skills } from "@/lib/content";

const btn = "inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium transition-all duration-300 active:scale-95";

export default function Home() {
  const initials = profile.name.split(" ").map((w) => w[0]).join("");
  return (
    <div className="relative min-h-screen selection:bg-accent/20 selection:text-accent">
      {/* Subtle Ambient Background Glow */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute top-1/2 -left-40 h-[400px] w-[400px] rounded-full bg-line/60 blur-3xl" />
      </div>

      <Nav name={profile.name} />

      <main id="top">
        {/* HERO SECTION */}
        <section className="mx-auto grid max-w-5xl items-center gap-12 px-6 pb-20 pt-36 md:grid-cols-[1.4fr_1fr] md:pt-44">
          <div className="reveal">
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-3.5 py-1 text-xs font-medium text-accent">
                <Sparkles size={13} /> Open to Internships & Roles
              </span>
              <span className="flex items-center gap-1.5 text-sm text-muted">
                <MapPin size={15} className="text-accent" /> {profile.location}
              </span>
            </div>

            <h1 className="font-serif text-5xl tracking-tight leading-[1.1] md:text-7xl">
              {profile.name}
            </h1>
            <p className="mt-6 max-w-xl text-xl font-medium leading-relaxed text-ink/85 md:text-2xl">
              {profile.headline}
            </p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
              {profile.summary}
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#projects"
                className={`${btn} bg-ink text-paper shadow-md hover:-translate-y-0.5 hover:bg-accent hover:shadow-lg`}
              >
                Explore My Work <ArrowRight size={16} />
              </a>
              <a
                href={profile.resume}
                download
                className={`${btn} border border-ink/20 bg-white/70 backdrop-blur-sm hover:-translate-y-0.5 hover:border-accent hover:text-accent hover:shadow-sm`}
              >
                <Download size={16} /> Download Resume
              </a>
            </div>
          </div>

          {/* DESIGNER MONOGRAM ARCH (Looks great without photo too!) */}
          <div className="reveal relative mx-auto w-full max-w-xs">
            <div className="absolute -inset-3 rounded-t-full border border-accent/20" />
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-t-full border-2 border-white bg-gradient-to-b from-line/80 via-line to-accent/15 shadow-xl">
              {profile.photo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={profile.photo} alt={`Portrait of ${profile.name}`} className="h-full w-full object-cover" />
              ) : (
                <div
                  className="flex h-full w-full flex-col items-center justify-center p-6 text-center"
                  role="img"
                  aria-label="Monogram design"
                >
                  <span className="font-serif text-7xl tracking-wider text-accent drop-shadow-sm md:text-8xl">
                    {initials}
                  </span>
                  <span className="mt-3 text-[11px] font-medium uppercase tracking-[0.25em] text-ink/50">
                    Portfolio
                  </span>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <Section id="about" eyebrow="About" title="A little about me">
          <div className="rounded-3xl border border-line bg-white/70 p-8 shadow-sm backdrop-blur-sm md:p-10">
            <div className="max-w-3xl space-y-5 text-lg leading-relaxed text-ink/85">
              {about.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
        </Section>

        {/* EDUCATION SECTION */}
        <Section id="education" eyebrow="Education" title="Where I'm learning">
          <div className="space-y-6">
            {education.map((e) => (
              <div
                key={e.degree}
                className="group relative rounded-2xl border border-line bg-white/80 p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/50 hover:shadow-md md:p-8"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                    {e.years}
                  </span>
                  <span className="text-sm font-medium text-muted">{e.note}</span>
                </div>
                <h3 className="mt-3 font-serif text-2xl transition-colors group-hover:text-accent">
                  {e.degree}
                </h3>
                <p className="mt-1 text-base text-ink/80">{e.place}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* SKILLS SECTION */}
        <Section id="skills" eyebrow="Skills" title="What I work with">
          <div className="grid gap-6 sm:grid-cols-2">
            {skills.map((g) => (
              <div
                key={g.title}
                className="rounded-3xl border border-line bg-white/80 p-6 shadow-sm transition-all duration-300 hover:border-accent/40 hover:shadow-md md:p-8"
              >
                <h3 className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-accent">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  {g.title}
                </h3>
                <ul className="flex flex-wrap gap-2.5">
                  {g.items.map((i) => (
                    <li
                      key={i}
                      className="cursor-default rounded-full border border-line bg-paper px-4 py-1.5 text-sm font-medium text-ink/90 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:bg-accent hover:text-white"
                    >
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* PROJECTS SECTION */}
        <Section id="projects" eyebrow="Projects" title="Selected work">
          <div className="grid gap-6">
            {projects.map((p) => (
              <article
                key={p.title}
                className="group rounded-3xl border border-line bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 hover:shadow-xl md:p-9"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <h3 className="font-serif text-2xl transition-colors group-hover:text-accent md:text-3xl">
                    {p.title}
                  </h3>
                  {(p.github || p.live) && (
                    <div className="flex gap-3 text-sm font-medium">
                      {p.github && (
                        <a
                          className="inline-flex items-center gap-1.5 rounded-full border border-line px-3.5 py-1.5 transition hover:border-ink hover:bg-ink hover:text-paper"
                          href={p.github}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Github size={15} /> Code
                        </a>
                      )}
                      {p.live && (
                        <a
                          className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-3.5 py-1.5 text-accent transition hover:bg-accent hover:text-white"
                          href={p.live}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <ExternalLink size={15} /> Live Demo
                        </a>
                      )}
                    </div>
                  )}
                </div>

                <p className="mt-3 text-base leading-relaxed text-ink/80">{p.description}</p>

                <ul className="mt-5 flex flex-wrap gap-2 text-xs font-medium text-accent">
                  {p.tech.map((t) => (
                    <li key={t} className="rounded-full bg-accent/10 px-3 py-1">
                      {t}
                    </li>
                  ))}
                </ul>

                <dl className="mt-6 grid gap-4 rounded-2xl bg-paper/70 p-4 text-sm sm:grid-cols-2">
                  <div>
                    <dt className="font-semibold text-ink">My contribution</dt>
                    <dd className="mt-1 text-muted">{p.contribution}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-ink">Outcome</dt>
                    <dd className="mt-1 text-muted">{p.outcome}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </Section>

        {/* EXPERIENCE SECTION */}
        <Section id="experience" eyebrow="Experience" title="Experience & leadership">
          {experience.length ? (
            <ol className="space-y-6 border-l-2 border-accent/40 pl-6">
              {experience.map((x) => (
                <li key={x.role} className="rounded-2xl border border-line bg-white/80 p-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-accent">{x.period}</p>
                  <h3 className="mt-1 font-serif text-xl">{x.role} · {x.org}</h3>
                  <p className="mt-2 text-ink/80">{x.detail}</p>
                </li>
              ))}
            </ol>
          ) : (
            <div className="rounded-3xl border border-dashed border-accent/40 bg-accent/5 p-8">
              <p className="max-w-2xl text-lg leading-relaxed text-ink/85">
                I'm at the start of my professional journey and actively looking for an internship or entry-level opportunity where I can learn on real projects and build impactful web experiences.
              </p>
            </div>
          )}
        </Section>

        {/* ACHIEVEMENTS SECTION */}
        <Section id="achievements" eyebrow="Achievements" title="Certifications">
          <ul className="grid gap-5 sm:grid-cols-2">
            {certifications.map((c) => (
              <li
                key={c.title}
                className="flex gap-4 rounded-2xl border border-line bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/50 hover:shadow-md"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Award size={22} />
                </div>
                <div>
                  <h3 className="font-semibold text-ink">{c.title}</h3>
                  <p className="mt-1 text-sm text-muted">{c.detail}</p>
                </div>
              </li>
            ))}
          </ul>
        </Section>

        {/* INTERESTS SECTION */}
        <Section id="interests" eyebrow="Interests" title="What draws me in">
          <ul className="flex flex-wrap gap-3">
            {interests.map((i) => (
              <li
                key={i}
                className="rounded-full border border-ink bg-ink px-5 py-2.5 text-sm font-medium text-paper transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:bg-accent"
              >
                {i}
              </li>
            ))}
          </ul>
        </Section>

        {/* CONTACT SECTION */}
        <Section id="contact" eyebrow="Contact" title="Let's connect">
          <div className="rounded-3xl border border-line bg-white p-8 shadow-sm md:p-12">
            <p className="max-w-xl text-lg leading-relaxed text-ink/80">
              Looking for an intern or junior developer? I'd love to hear from you and discuss how I can contribute to your team.
            </p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              <li>
                <a
                  className="flex items-center gap-3 rounded-2xl border border-line bg-paper/60 p-4 transition hover:border-accent hover:text-accent"
                  href={`mailto:${profile.email}`}
                >
                  <Mail size={19} className="text-accent" />
                  <span className="truncate text-sm font-medium">{profile.email}</span>
                </a>
              </li>
              <li>
                <a
                  className="flex items-center gap-3 rounded-2xl border border-line bg-paper/60 p-4 transition hover:border-accent hover:text-accent"
                  href={`tel:${profile.phone.replace(/\s/g, "")}`}
                >
                  <Phone size={19} className="text-accent" />
                  <span className="text-sm font-medium">{profile.phone}</span>
                </a>
              </li>
              {profile.linkedin && (
                <li>
                  <a
                    className="flex items-center gap-3 rounded-2xl border border-line bg-paper/60 p-4 transition hover:border-accent hover:text-accent"
                    href={profile.linkedin}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Linkedin size={19} className="text-accent" />
                    <span className="text-sm font-medium">LinkedIn Profile</span>
                  </a>
                </li>
              )}
              {profile.github && (
                <li>
                  <a
                    className="flex items-center gap-3 rounded-2xl border border-line bg-paper/60 p-4 transition hover:border-accent hover:text-accent"
                    href={profile.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Github size={19} className="text-accent" />
                    <span className="text-sm font-medium">GitHub Profile</span>
                  </a>
                </li>
              )}
            </ul>
            <a
              href={`mailto:${profile.email}?subject=Hello%20${encodeURIComponent(profile.name)}`}
              className={`${btn} mt-8 bg-accent text-white shadow-md hover:-translate-y-0.5 hover:bg-ink hover:shadow-lg`}
            >
              Send me an email <ArrowRight size={16} />
            </a>
          </div>
        </Section>
      </main>

      <footer className="mt-12 border-t border-line bg-white/40 py-8 text-center text-sm text-muted">
        © {new Date().getFullYear()} {profile.name} · Designed & Built with Next.js
      </footer>
    </div>
  );
}