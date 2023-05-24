interface HomeProps {}

export function HomeSection(props: HomeProps) {
  return (
    <div className="space-y-14">
      <div className="mb-9 mt-20">
        <h2 className="text-4xl font-semibold">Victor Avila</h2>
        <span className="text-sm text-zinc-500">
          Software Engineer at <span className="text-cyan-600">Cisco</span>
        </span>
        <br />
        <p className="mt-2 italic">
          Building awesome and meaningful technology people care about.
        </p>
      </div>
      <span>
        Hi! I am a passionate developer who loves to learn and help others
        learn. I&apos;m interested in all things web and all the cool and
        cutting-edge technologies that come with it. I specialize in Angular and
        React but I am very interested in Astro and SvelteKit.
        <br />
        <br />
        In my off-time, I like to watch &ldquo;The Office,&rdquo; play a game of
        darts, or go out for a drive and take in nature.
      </span>
    </div>
  );
}
