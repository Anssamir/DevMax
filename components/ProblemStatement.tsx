import Image from 'next/image'

export default function ProblemStatement() {
  return (
    <section id="problem" className="bg-white dark:bg-black py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <p className="font-mono text-xs font-semibold text-primary-deep uppercase tracking-wider">
              Building software shouldn&apos;t feel fragmented
            </p>
            <h2 className="font-heading text-4xl font-bold leading-tight text-text-heading">
              One product shouldn&apos;t need five different teams.
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
                together in one team so the people shaping the product are
                also the people building it.
              </p>
            </div>
          </div>

          <div>
            <Image
              src="/Building software should not feel fragmented.png"
              alt="Building software should not feel fragmented"
              width={1200}
              height={630}
              className="w-full h-auto rounded-xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
