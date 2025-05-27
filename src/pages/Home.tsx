import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-6 mt-20">
      <div className="rounded-full w-32 h-32 bg-neutral-3/10 flex items-center justify-center mb-2">
        {/* Placeholder for headshot */}
        <span className="text-6xl text-neutral-3">👋</span>
      </div>
      <h1 className="text-4xl font-bold text-white mb-2">Tzu-Chieh (Jeff) Lin</h1>
      <p className="text-neutral-3 text-xl max-w-lg text-center">
        Software Engineer @ AWS | Human-Centered Computing | LLM Systems | Cloud Observability
      </p>
      <div className="flex gap-4 mt-4">
        <a href="mailto:tl3097@columbia.edu" className="px-4 py-2 bg-neutral-2 rounded hover:bg-neutral-3 hover:text-black transition">Email</a>
        <a href="https://www.linkedin.com/in/tl3097" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-neutral-2 rounded hover:bg-neutral-3 hover:text-black transition">LinkedIn</a>
        <Link to="/resume" className="px-4 py-2 bg-neutral-2 rounded hover:bg-neutral-3 hover:text-black transition">Resume</Link>
      </div>
    </section>
  );
}