import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen bg-surface">
      {/* 01-ann-hifi - Announcement Bar */}
      <section className="bg-surface dark:bg-black text-text-primary dark:text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-4">
          <div className="w-2 h-2 rounded-full bg-primary-mid" />
          <p className="font-mono text-xs font-semibold">
            Now building AI-native products for ambitious teams
          </p>
          <svg
            className="w-4 h-4 text-primary-mid"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 17L17 7M17 7H7M17 7v10"
            />
          </svg>
        </div>
      </section>

      {/* 02-nav-hifi - Main Navigation */}
      <nav className="bg-white dark:bg-black border-b border-outline-variant">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Brand */}
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-lg bg-primary-mid" />
              <span className="font-heading text-xl font-bold text-text-heading">
                DevMax
              </span>
            </div>

            {/* Nav Links */}
            <div className="hidden md:flex items-center gap-10">
              <a
                href="#how-we-work"
                className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
              >
                How we work
              </a>
              <a
                href="#selected-work"
                className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
              >
                Selected work
              </a>
              <a
                href="#what-we-build"
                className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
              >
                What we build
              </a>
              <a
                href="#ai-systems"
                className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
              >
                AI systems
              </a>
            </div>

            {/* CTA */}
            <a
              href="#contact"
              className="bg-primary-mid text-white font-semibold py-3 px-6 rounded-md hover:bg-primary-bold transition-colors shadow-sm flex items-center gap-2"
            >
              Start a project
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 17L17 7M17 7H7M17 7v10"
                />
              </svg>
            </a>
          </div>
        </div>
      </nav>

      {/* 03-sec-nav-hifi - Secondary Navigation */}
      <section className="bg-surface-container dark:bg-surface-container border-b border-outline-variant">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Positioning Line */}
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium text-text-secondary">
                One team across
              </span>
              <span className="font-mono text-xs font-semibold text-ink-mid">
                strategy · design · engineering · AI
              </span>
            </div>

            {/* Capability Links */}
            <div className="flex items-center gap-8">
              <a
                href="#for-founders"
                className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
              >
                For founders
              </a>
              <a
                href="#for-product-teams"
                className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
              >
                For product teams
              </a>
              <a
                href="#explore"
                className="flex items-center gap-2 py-2 px-4 rounded-full border border-outline text-text-primary hover:bg-surface-hover transition-colors"
              >
                <span className="text-sm font-medium">Explore our work</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 04-hero-hifi - Hero Section */}
      <section className="bg-white dark:bg-black py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Hero Copy */}
            <div className="space-y-8">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-primary-container">
                <span className="text-xs font-semibold text-ink-mid">
                  Full-stack product studio
                </span>
              </div>

              {/* Headline */}
              <h1 className="font-heading text-6xl font-bold leading-tight text-text-heading">
                From idea to launch.
                <br />
                Built to grow.
              </h1>

              {/* Body */}
              <p className="text-lg text-text-secondary leading-relaxed max-w-xl">
                DevMax turns ambitious product ideas into launch-ready software
                — combining product strategy, experience design, engineering,
                and AI in one senior team.
              </p>

              {/* CTAs */}
              <div className="flex items-center gap-4">
                <a
                  href="#contact"
                  className="bg-primary-mid text-white font-semibold py-3 px-6 rounded-md hover:bg-primary-bold transition-colors shadow-sm"
                >
                  Start a project
                </a>
                <a
                  href="#how-we-work"
                  className="border border-outline text-text-primary font-semibold py-3 px-6 rounded-md hover:bg-surface-hover transition-colors"
                >
                  See how we work
                </a>
              </div>

              {/* Proof */}
              <div className="flex items-center gap-8 pt-4">
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-primary-mid"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm text-text-secondary">
                    50+ products launched
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-primary-mid"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm text-text-secondary">
                    End-to-end delivery
                  </span>
                </div>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-ink-container to-surface">
                {/* Placeholder for hero image */}
                <div className="absolute inset-0 bg-gradient-to-br from-ink-container/80 to-surface/80" />

                {/* Chrome Bar */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="text-white/60 text-sm font-mono">
                    devmax.app
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 05-proof-hifi - Proof Strip */}
      <section className="bg-surface-container dark:bg-surface-container border-y border-outline-variant py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Proof Intro */}
            <div className="space-y-2">
              <p className="text-sm font-semibold text-text-primary">
                Built for teams that care about getting it right.
              </p>
              <p className="text-xs text-text-secondary">
                Senior product thinking, end-to-end delivery.
              </p>
            </div>

            {/* Metrics */}
            <div className="flex items-center gap-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-text-heading">50+</div>
                <div className="text-xs text-text-secondary">
                  Products Launched
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-text-heading">98%</div>
                <div className="text-xs text-text-secondary">
                  Client Retention
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-text-heading">4.9</div>
                <div className="text-xs text-text-secondary">
                  Client Rating
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 06-problem-hifi - Problem Section */}
      <section className="bg-white dark:bg-black py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Problem Copy */}
            <div className="space-y-8">
              <p className="font-mono text-xs font-semibold text-text-secondary uppercase tracking-wider">
                Building software shouldn't feel fragmented
              </p>
              <h2 className="font-heading text-4xl font-bold leading-tight text-text-heading">
                One product shouldn't need five different teams.
              </h2>
              <div className="space-y-6 text-base text-text-secondary leading-relaxed">
                <p>
                  Ideas get stuck between strategy and execution. Designs get
                  thrown over the wall to developers. AI gets added after the
                  product is already built. And every handoff creates more time,
                  more cost, and more room for things to get lost.
                </p>
                <p>
                  DevMax brings product thinking, design, engineering, and AI
                  together in one team — so the people shaping the product are
                  also the people building it.
                </p>
              </div>
            </div>

            {/* Problem Callout */}
            <div className="bg-surface-container dark:bg-surface-container border border-text-heading rounded-xl p-8 space-y-6">
              <h3 className="font-heading text-2xl font-bold leading-tight text-text-heading">
                Less handoff. Better decisions. Faster progress.
              </h3>
              <a
                href="#how-we-work"
                className="inline-flex items-center gap-2 text-sm font-medium text-text-primary hover:text-primary-mid transition-colors"
              >
                See our approach
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 07-model-hifi - Model Section */}
      <section id="how-we-work" className="bg-surface-container dark:bg-surface-container py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Model Header */}
          <div className="space-y-4">
            <p className="font-mono text-xs font-semibold text-text-secondary uppercase tracking-wider">
              One team. Every stage.
            </p>
            <h2 className="font-heading text-3xl font-bold leading-tight text-text-heading">
              Think it. Design it. Build it. Launch it. Grow it.
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl">
              We work across the full product journey — so you can move from a
              rough idea to a working product without stitching together
              disconnected specialists.
            </p>
          </div>

          {/* Model Stages */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { name: 'Strategy', icon: '🎯', active: false },
              { name: 'Design', icon: '🎨', active: false },
              { name: 'Engineering', icon: '⚡', active: true },
              { name: 'AI Systems', icon: '🤖', active: false },
              { name: 'Growth', icon: '📈', active: false },
            ].map((stage) => (
              <div
                key={stage.name}
                className={`p-6 rounded-xl border ${stage.active
                    ? 'bg-primary-mid border-primary-mid'
                    : 'bg-white dark:bg-black border-outline-variant'
                  }`}
              >
                <div className="text-2xl mb-4">{stage.icon}</div>
                <h3
                  className={`font-heading font-bold ${stage.active ? 'text-black' : 'text-text-heading'
                    }`}
                >
                  {stage.name}
                </h3>
              </div>
            ))}
          </div>

          {/* Model Footer */}
          <div className="flex items-center justify-between pt-8 border-t border-outline-variant">
            <p className="text-base font-medium text-text-secondary max-w-2xl">
              You don't have to figure out which service you need first. Tell us
              what you're trying to achieve.
            </p>
            <a
              href="#contact"
              className="border border-text-heading text-text-primary font-semibold py-3 px-6 rounded-md hover:bg-surface-hover transition-colors"
            >
              Book a call
            </a>
          </div>
        </div>
      </section>

      {/* 08-work-hifi - Selected Work Section */}
      <section id="selected-work" className="bg-white dark:bg-black py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Work Header */}
          <div className="space-y-4">
            <p className="font-mono text-xs font-semibold text-text-secondary uppercase tracking-wider">
              Selected work
            </p>
            <h2 className="font-heading text-3xl font-bold leading-tight text-text-heading">
              Ideas are easy to talk about. Products are harder to ship.
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl">
              See how we've turned business problems, product ideas, and complex
              workflows into real digital experiences.
            </p>
          </div>

          {/* Work Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'FinTech Dashboard',
                category: 'Fintech',
                description:
                  'Real-time analytics platform for institutional investors.',
              },
              {
                title: 'HealthTech Platform',
                category: 'Healthcare',
                description:
                  'Patient management system with AI-powered diagnostics.',
              },
              {
                title: 'E-commerce Experience',
                category: 'Retail',
                description:
                  'Personalized shopping experience with recommendation engine.',
              },
            ].map((project) => (
              <div
                key={project.title}
                className="bg-surface-container dark:bg-surface-container border border-outline-variant rounded-xl p-6 space-y-4"
              >
                <div className="aspect-video bg-neutral-subtle rounded-lg" />
                <div className="space-y-2">
                  <p className="text-xs font-semibold text-text-secondary uppercase">
                    {project.category}
                  </p>
                  <h3 className="font-heading text-xl font-bold text-text-heading">
                    {project.title}
                  </h3>
                  <p className="text-sm text-text-secondary">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 09-build-hifi - What We Build Section */}
      <section id="what-we-build" className="bg-surface-container dark:bg-surface-container py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Build Header */}
          <div className="space-y-4">
            <p className="font-mono text-xs font-semibold text-text-secondary uppercase tracking-wider">
              What we build
            </p>
            <h2 className="font-heading text-3xl font-bold leading-tight text-text-heading">
              Start with what you need to achieve.
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl">
              Whether you're starting from zero or improving something that
              already exists, we'll help you find the right path.
            </p>
          </div>

          {/* Build Row */}
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Product Strategy',
                description:
                  'From market research to product roadmaps. We help you figure out what to build and why.',
              },
              {
                title: 'UX/UI Design',
                description:
                  'User-centered design that converts. From wireframes to high-fidelity prototypes.',
              },
              {
                title: 'Full-Stack Development',
                description:
                  'Modern web and mobile applications built with the right technology stack.',
              },
              {
                title: 'AI Integration',
                description:
                  'Intelligent features that add real value. From recommendation engines to predictive analytics.',
              },
            ].map((service) => (
              <div
                key={service.title}
                className="bg-white dark:bg-black border border-outline-variant rounded-xl p-8 space-y-4"
              >
                <h3 className="font-heading text-xl font-bold text-text-heading">
                  {service.title}
                </h3>
                <p className="text-base text-text-secondary leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10-ai-hifi - AI-Native Section */}
      <section id="ai-systems" className="bg-ink-container dark:bg-ink-container py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* AI Header */}
          <div className="space-y-4">
            <p className="font-mono text-xs font-semibold text-primary-mid uppercase tracking-wider">
              AI-native. Not AI-added.
            </p>
            <h2 className="font-heading text-3xl font-bold leading-tight text-white">
              AI isn't a feature we bolt on. It's in the DNA of every product we
              build.
            </h2>
            <p className="text-lg text-neutral-soft max-w-3xl">
              Most teams treat AI as an afterthought. We treat it as a first
              principle — baked into strategy, design, and engineering from day
              one.
            </p>
          </div>

          {/* AI Features */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'AI Strategy',
                description:
                  'Identify where AI can create real value in your product.',
              },
              {
                title: 'ML Engineering',
                description:
                  'Build and deploy machine learning models at scale.',
              },
              {
                title: 'Intelligent UX',
                description:
                  'Design AI-powered features that users actually want to use.',
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="bg-surface-container/50 rounded-xl p-6 space-y-4"
              >
                <h3 className="font-heading text-xl font-bold text-white">
                  {feature.title}
                </h3>
                <p className="text-sm text-neutral-soft leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11-testimonials-hifi - Testimonials Section */}
      <section className="bg-surface-container dark:bg-surface-container py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Testimonials Header */}
          <div className="space-y-4">
            <p className="font-mono text-xs font-semibold text-text-secondary uppercase tracking-wider">
              What founders say
            </p>
            <h2 className="font-heading text-3xl font-bold leading-tight text-text-heading">
              Built with trust. Measured by outcomes.
            </h2>
          </div>

          {/* Testimonials */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "DevMax didn't just build our product — they helped us figure out what to build. The team's strategic thinking was invaluable.",
                author: 'Sarah Chen',
                role: 'CEO, FinTech Startup',
              },
              {
                quote:
                  'The quality of work and speed of delivery exceeded our expectations. They truly understand how to build products that scale.',
                author: 'Michael Rodriguez',
                role: 'CTO, HealthTech Company',
              },
              {
                quote:
                  "Working with DevMax felt like having an extension of our own team. Their AI expertise gave us a real competitive advantage.",
                author: 'Emily Park',
                role: 'Founder, E-commerce Platform',
              },
            ].map((testimonial) => (
              <div
                key={testimonial.author}
                className="bg-white dark:bg-black border border-outline-variant rounded-xl p-8 space-y-6"
              >
                <p className="text-base text-text-secondary leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-heading font-bold text-text-heading">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-text-secondary">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12-faq-hifi - FAQ Section */}
      <section className="bg-white dark:bg-black py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* FAQ Left */}
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="font-mono text-xs font-semibold text-text-secondary uppercase tracking-wider">
                  Frequently asked
                </p>
                <h2 className="font-heading text-2xl font-bold leading-tight text-text-heading">
                  Everything you want to know before we start.
                </h2>
              </div>
              <a
                href="#contact"
                className="bg-primary-mid text-white font-semibold py-3 px-6 rounded-md hover:bg-primary-bold transition-colors shadow-sm inline-flex items-center gap-2"
              >
                Ask us anything
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>

            {/* FAQ Items */}
            <div className="lg:col-span-2 space-y-4">
              {[
                {
                  question: 'How long does a typical project take?',
                  answer:
                    "Most projects range from 8-16 weeks, depending on scope and complexity. We'll provide a detailed timeline during our discovery phase.",
                },
                {
                  question: "What's your pricing model?",
                  answer:
                    'We offer both project-based and retainer pricing. Every engagement starts with a discovery phase to understand your needs and provide an accurate estimate.',
                },
                {
                  question: 'Do you work with startups?',
                  answer:
                    'Yes! We work with startups at all stages, from pre-seed to Series C. We understand the unique challenges and speed requirements of early-stage companies.',
                },
                {
                  question: 'What technologies do you use?',
                  answer:
                    'We choose the right technology stack for each project. Our expertise includes React, Next.js, Node.js, Python, and various AI/ML frameworks.',
                },
                {
                  question: 'How do you handle ongoing support?',
                  answer:
                    'We offer flexible maintenance and support packages after launch. Many of our clients continue with us on a retainer basis for ongoing improvements.',
                },
              ].map((faq) => (
                <div
                  key={faq.question}
                  className="bg-surface-container dark:bg-surface-container border border-outline-variant rounded-xl p-6 space-y-3"
                >
                  <h3 className="font-heading font-bold text-text-heading">
                    {faq.question}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 13-final-cta-hifi - Final CTA Section */}
      <section
        id="contact"
        className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-ink-container to-surface-container" />

        <div className="relative max-w-4xl mx-auto text-center space-y-12">
          {/* CTA Text Group */}
          <div className="space-y-4">
            <h2 className="font-heading text-4xl font-bold leading-tight text-white">
              Ready to build something real?
            </h2>
            <p className="text-lg text-neutral-soft max-w-2xl mx-auto">
              Tell us what you're building, and we'll tell you if we're the
              right team to help you build it.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center justify-center gap-4">
            <a
              href="mailto:hello@devmax.app"
              className="bg-primary-mid text-white font-semibold py-4 px-10 rounded-md hover:bg-primary-bold transition-colors"
            >
              Start a project
            </a>
            <a
              href="#how-we-work"
              className="border border-neutral-soft text-white font-semibold py-4 px-10 rounded-md hover:bg-white/10 transition-colors"
            >
              Book a call
            </a>
          </div>
        </div>
      </section>

      {/* 14-footer-hifi - Footer */}
      <footer className="bg-black text-white pt-20 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Footer Top */}
          <div className="flex flex-col md:flex-row justify-between gap-12">
            {/* Footer Brand */}
            <div className="space-y-4 max-w-xs">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary-mid" />
                <span className="font-heading text-xl font-bold">DevMax</span>
              </div>
              <p className="text-sm text-neutral-soft leading-relaxed">
                Full-stack product studio combining strategy, design,
                engineering, and AI.
              </p>
            </div>

            {/* Footer Nav */}
            <div className="flex gap-16">
              <div className="space-y-4">
                <h4 className="font-heading font-bold">Services</h4>
                <ul className="space-y-2 text-sm text-neutral-soft">
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Product Strategy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      UX/UI Design
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Development
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      AI Systems
                    </a>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="font-heading font-bold">Company</h4>
                <ul className="space-y-2 text-sm text-neutral-soft">
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Work
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="font-heading font-bold">Connect</h4>
                <ul className="space-y-2 text-sm text-neutral-soft">
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      GitHub
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-neutral-intense">
            <p className="text-xs text-neutral-soft">
              © 2026 DevMax. All rights reserved.
            </p>
            <div className="flex items-center gap-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-xs text-neutral-soft hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-xs text-neutral-soft hover:text-white transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
