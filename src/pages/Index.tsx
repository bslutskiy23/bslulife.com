import { Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { QuoteForm } from "@/components/QuoteForm";
import heroImage from "@/assets/family-hero.jpg";
import {
  ShieldCheck,
  Clock,
  HeartHandshake,
  HomeIcon,
  Flower2,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";

const PHONE = "+1 (224) 448-4735";
const PHONE_HREF = "tel:+12244484735";
const EMAIL = "bslulife@outlook.com";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <header className="absolute top-0 inset-x-0 z-20">
        <div className="container flex items-center justify-between py-5">
          <a href="#top" className="flex items-center gap-2 text-primary-foreground">
            <div className="h-9 w-9 rounded-lg bg-gold flex items-center justify-center">
              <ShieldCheck className="h-5 w-5 text-primary" />
            </div>
            <div className="leading-tight">
              <div className="font-display font-bold text-lg">BSLU Life</div>
              <div className="text-[10px] uppercase tracking-widest text-primary-foreground/70">
                Through Symmetry Financial
              </div>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-primary-foreground/80">
            <a href="#coverage" className="hover:text-primary-foreground transition-smooth">Coverage</a>
            <a href="#why" className="hover:text-primary-foreground transition-smooth">Why BSLU</a>
            <a href="#how" className="hover:text-primary-foreground transition-smooth">How it works</a>
            <a href="#faq" className="hover:text-primary-foreground transition-smooth">FAQ</a>
          </nav>
          <Button asChild variant="outline" size="lg" className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
            <a href={PHONE_HREF}>
              <Phone className="h-4 w-4" /> Call an agent
            </a>
          </Button>
        </div>
      </header>

      {/* Hero — split-screen */}
      <section id="top" className="relative bg-hero-gradient text-primary-foreground overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.07] mix-blend-screen"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at top right, hsl(var(--gold)) 0%, transparent 60%)",
          }}
        />
        <div className="container relative grid lg:grid-cols-2 gap-12 lg:gap-16 items-center pt-32 pb-20 lg:pt-40 lg:pb-28">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/5 px-4 py-1.5 text-xs uppercase tracking-widest">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              Now accepting new policies
            </div>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05]">
              Protect what
              <br />
              <span className="text-gold">matters most.</span>
            </h1>
            <p className="text-lg sm:text-xl text-primary-foreground/80 max-w-xl leading-relaxed">
              Affordable life insurance with no-exam options, fast quotes, and real
              human agents. Helping families get covered in minutes — backed by Symmetry Financial Group.
            </p>

            <div className="flex flex-wrap gap-x-8 gap-y-3 pt-4 text-sm text-primary-foreground/75">
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-gold" /> No medical exam options</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-gold" /> Quotes in 60 seconds</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-gold" /> Licensed agents</div>
            </div>
          </div>

          <div id="quote" className="relative">
            <div className="absolute -inset-4 bg-gold/20 rounded-3xl blur-2xl" aria-hidden />
            <div className="relative">
              <QuoteForm />
            </div>
          </div>
        </div>

        {/* Hero image strip */}
        <div className="container relative pb-16">
          <div className="rounded-2xl overflow-hidden shadow-elegant border border-primary-foreground/10">
            <img
              src={heroImage}
              alt="A multigenerational family laughing together at home"
              width={1280}
              height={1600}
              className="w-full h-[280px] sm:h-[360px] object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-y border-border bg-secondary">
        <div className="container py-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { k: "60s", v: "Average quote time" },
            { k: "A+", v: "Carrier ratings" },
            { k: "$0", v: "Cost to apply" },
            { k: "1M+", v: "Families protected" },
          ].map((s) => (
            <div key={s.v}>
              <div className="font-display text-3xl sm:text-4xl font-bold text-primary">{s.k}</div>
              <div className="text-xs sm:text-sm uppercase tracking-wider text-muted-foreground mt-1">{s.v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Coverage */}
      <section id="coverage" className="py-24 bg-background">
        <div className="container">
          <div className="max-w-2xl mb-14">
            <div className="text-xs uppercase tracking-widest text-accent font-semibold mb-3">Coverage</div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-primary leading-tight">
              The right policy for every season of life.
            </h2>
            <p className="text-muted-foreground text-lg mt-4">
              Simple, affordable plans designed around the moments that matter — your family,
              your home, and your legacy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: ShieldCheck, title: "Term Life", desc: "Big coverage at low monthly rates. Ideal for young families and growing budgets." },
              { icon: TrendingUp, title: "Whole & IUL", desc: "Lifelong protection that builds cash value you can borrow against later." },
              { icon: HomeIcon, title: "Mortgage Protection", desc: "Pay off the home if the unexpected happens — keep your family in it." },
              { icon: Flower2, title: "Final Expense", desc: "Affordable coverage for funeral and end-of-life costs. No exam required." },
              { icon: Clock, title: "No-Exam Plans", desc: "Get covered in as little as 24 hours. Just a few questions — no needles." },
              { icon: HeartHandshake, title: "Living Benefits", desc: "Access your benefit while alive in the event of a chronic or critical illness." },
            ].map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="group rounded-2xl border border-border bg-card p-7 shadow-card-soft hover:shadow-elegant hover:-translate-y-1 transition-smooth"
              >
                <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-5 group-hover:bg-accent group-hover:text-accent-foreground transition-smooth">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-xl font-semibold text-primary mb-2">{title}</h3>
                <p className="text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section id="why" className="py-24 bg-soft-gradient">
        <div className="container grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-xs uppercase tracking-widest text-accent font-semibold mb-3">Why BSLU</div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-primary leading-tight">
              Real protection, from real people who pick up the phone.
            </h2>
            <p className="text-muted-foreground text-lg mt-5 leading-relaxed">
              Backed by the strength and support of Symmetry Financial Group, we shop top-rated
              carriers to find a plan that fits your family — and your budget. No bots. No pressure.
              Just honest guidance from a licensed agent.
            </p>

            <ul className="mt-8 space-y-4">
              {[
                "We compare top-rated carriers so you don't have to",
                "No-obligation quotes — apply only if you love the price",
                "Coverage as soon as the same day, in many cases",
                "Personal agent you can text, call, or email anytime",
              ].map((line) => (
                <li key={line} className="flex gap-3">
                  <CheckCircle2 className="h-6 w-6 text-accent shrink-0" />
                  <span className="text-foreground">{line}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild variant="accent" size="lg">
                <a href="#quote">Start my quote</a>
              </Button>
              <Button asChild variant="ghost" size="lg" className="text-primary">
                <a href={`mailto:${EMAIL}`}>
                  <Mail className="h-4 w-4" /> {EMAIL}
                </a>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-elegant border border-border">
              <img
                src={heroImage}
                alt="Family enjoying time together at home"
                loading="lazy"
                width={1280}
                height={1600}
                className="w-full h-[520px] object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 hidden md:block bg-card rounded-2xl p-6 shadow-elegant border border-border max-w-xs">
              <div className="flex gap-1 text-gold mb-2" aria-label="5 star rating">
                {"★★★★★"}
              </div>
              <p className="text-sm text-foreground italic">
                "They walked me through everything. Got my family covered in one afternoon —
                less than my phone bill."
              </p>
              <div className="text-xs text-muted-foreground mt-3">— Maria R., policyholder</div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="py-24 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-2xl mb-14">
            <div className="text-xs uppercase tracking-widest text-gold font-semibold mb-3">How it works</div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold leading-tight">
              Three simple steps to peace of mind.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-10 md:gap-6">
            {[
              { n: "01", t: "Request your quote", d: "Tell us a little about you. Takes under a minute — no exam, no SSN required." },
              { n: "02", t: "Talk to a licensed agent", d: "We'll call you back to compare top-rated carriers and find your best rate." },
              { n: "03", t: "Get covered", d: "Sign electronically. Many policies activate the same day — protection starts immediately." },
            ].map((s) => (
              <div key={s.n} className="relative pl-6 border-l-2 border-gold/40">
                <div className="font-display text-5xl font-bold text-gold/80 mb-3">{s.n}</div>
                <h3 className="font-display text-2xl font-semibold mb-2">{s.t}</h3>
                <p className="text-primary-foreground/75 leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 bg-background">
        <div className="container max-w-4xl">
          <div className="text-xs uppercase tracking-widest text-accent font-semibold mb-3">FAQ</div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-primary leading-tight mb-10">
            Questions, answered honestly.
          </h2>
          <div className="divide-y divide-border border-y border-border">
            {[
              { q: "Do I need a medical exam?", a: "Not always. We offer no-exam options that approve in as little as 24 hours based on a few simple questions." },
              { q: "What if I already have coverage through work?", a: "Workplace coverage usually disappears when you change jobs and is rarely enough on its own. A personal policy stays with you, no matter what." },
              { q: "How fast can I get covered?", a: "Many of our policies activate the same day you apply. We'll walk you through it on the phone." },
              { q: "Will my premium go up?", a: "With term and most permanent policies, your premium is locked in for the length of the policy. No surprises." },
            ].map((item) => (
              <details key={item.q} className="group py-6">
                <summary className="cursor-pointer list-none flex items-center justify-between gap-6">
                  <span className="font-display text-lg font-semibold text-primary">{item.q}</span>
                  <span className="text-accent text-2xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-3 text-muted-foreground leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-hero-gradient text-primary-foreground">
        <div className="container text-center max-w-3xl">
          <h2 className="font-display text-4xl sm:text-5xl font-bold leading-tight">
            Your family deserves a plan. <span className="text-gold">Let's build it.</span>
          </h2>
          <p className="text-primary-foreground/80 text-lg mt-5">
            Get a free, no-obligation quote in under a minute.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Button asChild variant="hero" size="lg">
              <a href="#quote">Get my free quote</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
              <a href={PHONE_HREF}><Phone className="h-4 w-4" /> {PHONE}</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground/70 py-12 border-t border-primary-foreground/10">
        <div className="container grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 text-primary-foreground">
              <div className="h-9 w-9 rounded-lg bg-gold flex items-center justify-center">
                <ShieldCheck className="h-5 w-5 text-primary" />
              </div>
              <div className="leading-tight">
                <div className="font-display font-bold text-lg">BSLU Life</div>
                <div className="text-[10px] uppercase tracking-widest text-primary-foreground/60">
                  Through Symmetry Financial
                </div>
              </div>
            </div>
            <p className="text-sm mt-4 max-w-xs">
              Helping families protect what matters most with simple, affordable life insurance.
            </p>
          </div>
          <div>
            <div className="text-primary-foreground font-semibold mb-3">Contact</div>
            <ul className="space-y-2 text-sm">
              <li><a href={PHONE_HREF} className="hover:text-gold transition-smooth">{PHONE}</a></li>
              <li><a href={`mailto:${EMAIL}`} className="hover:text-gold transition-smooth">{EMAIL}</a></li>
            </ul>
          </div>
          <div>
            <div className="text-primary-foreground font-semibold mb-3">Explore</div>
            <ul className="space-y-2 text-sm">
              <li><a href="#coverage" className="hover:text-gold transition-smooth">Coverage</a></li>
              <li><a href="#how" className="hover:text-gold transition-smooth">How it works</a></li>
              <li><a href="#faq" className="hover:text-gold transition-smooth">FAQ</a></li>
            </ul>
          </div>
        </div>
        <div className="container mt-10 pt-6 border-t border-primary-foreground/10 text-xs flex flex-wrap justify-between gap-4">
          <div>© {new Date().getFullYear()} BSLU Life Insurance. All rights reserved.</div>
          <div>Insurance products offered through Symmetry Financial Group.</div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
