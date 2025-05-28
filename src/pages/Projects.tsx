export default function Projects() {
  return (
    <section className="max-w-2xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4 text-white">Projects</h2>
      <ul className="list-disc text-neutral-3 space-y-4 ml-5">
        <li>
          <strong>Amazon Echo Multimodal UX</strong>: UX analysis of onboarding for Google Nest/Amazon Echo.
        </li>
        <li>
          <strong>Emotion-Aware Dialogue System</strong>: BERT-based emotion and topic-switch prediction.
        </li>
        <li>
          <strong>E2E Testing Console (AWS)</strong>: React app for end-to-end environment creation (internship).
        </li>
        <li>
          <strong>Yelp Fake Reviews Detection</strong>: Full-stack prototype with BERT-based detection.
        </li>
        <li>
          <strong>IsLunch Loyalty App</strong>: Food-ordering and loyalty platform (YC Startup, Flutter).
        </li>
      </ul>
    </section>
  );
}