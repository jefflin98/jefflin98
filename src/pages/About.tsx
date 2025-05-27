export default function About() {
  return (
    <section className="max-w-2xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4 text-white">About Me</h2>
      <p className="mb-4 text-neutral-3">
        Hi, I'm Jeff, a Seattle-based software engineer at AWS with experience in LLM systems, cloud observability, and human-centered computing. 
        My work bridges technical depth (from AI/ML to scalable cloud infra) and user empathy, drawing from research and product experience in academia and industry.
      </p>
      <p className="mb-4 text-neutral-3">
        I hold an M.S. in Computer Science from Columbia (Machine Learning track), with research at the Computational Design Lab and Mobile & Ubiquitous Interaction Lab, and a B.S. from National Chiao Tung University. 
        My interests include: 
      </p>
      <ul className="list-disc list-inside text-neutral-3 mb-4">
        <li>Human-Computer Interaction, Data Visualization</li>
        <li>Large Language Model Systems</li>
        <li>Cloud Platforms, Observability & Analytics</li>
        <li>End-to-end product prototyping and user research</li>
      </ul>
      <p className="text-neutral-3">Outside work, I enjoy exploring new restaurants, running, and traveling.</p>
    </section>
  );
}