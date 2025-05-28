export default function Home() {
  return (
    <section className="text-center mt-32">
      <h1 className="text-5xl md:text-7xl font-bold text-fg mb-6">Jeff Lin</h1>
      <p className="text-lg text-muted mb-8">
        Software Engineer &middot; HCI Researcher &middot; Seattle, WA
      </p>
      <a
        href="mailto:tl3097@columbia.edu"
        className="inline-block text-accent border border-accent px-6 py-2 rounded-full hover:bg-accent hover:text-bg transition-colors font-semibold"
      >
        Contact Me
      </a>
    </section>
  );
}