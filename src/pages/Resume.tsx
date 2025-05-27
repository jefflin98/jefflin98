export default function Resume() {
  return (
    <section className="max-w-3xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-6 text-white">Resume</h2>
      <div className="mb-8">
        <h3 className="font-semibold text-lg mb-2 text-white">Education</h3>
        <ul className="text-neutral-3 list-disc list-inside">
          <li>
            <strong>Columbia University</strong>, M.S. Computer Science (Machine Learning), GPA: 3.8/4.0<br />
            Research: Computational Design Lab · TA: User Interface Design
          </li>
          <li>
            <strong>National Chiao Tung University</strong>, B.S. Computer Science, GPA: 4.1/4.3<br />
            Exchange: UIUC & UCL
          </li>
        </ul>
      </div>
      <div className="mb-8">
        <h3 className="font-semibold text-lg mb-2 text-white">Skills</h3>
        <ul className="flex flex-wrap gap-2 text-neutral-3">
          <li>Python</li><li>JavaScript</li><li>TypeScript</li><li>Java</li><li>C++</li><li>Swift</li>
          <li>React</li><li>Node.js</li><li>Git</li>
          <li>PyTorch</li><li>NumPy</li><li>Pandas</li><li>SQL</li><li>Spark</li>
          <li>LangChain</li><li>AWS</li>
          <li>HCI Research</li><li>ESM</li><li>Usability Testing</li>
        </ul>
      </div>
      <div className="mb-8">
        <h3 className="font-semibold text-lg mb-2 text-white">Experience</h3>
        <ul className="text-neutral-3 list-disc list-inside">
          <li>
            <strong>Amazon Web Services (AWS)</strong> – Software Engineer (2023–Present)<br />
            <span className="text-neutral-3 text-sm">
              AI Observability Assistant Initiative: LLM troubleshooting workflows, Bedrock agent, LangChain retrieval, user testing.<br />
              Cloud Observability: Scalable telemetry pipeline (S3/Spark), analytics with Redshift/QuickSight, schema standardization.
            </span>
          </li>
          <li>
            <strong>Mobile & Ubiquitous Interaction Lab</strong> – Research Assistant<br />
            Notification management study (CHI’21), ESM+UI data collection, Android app for research projects.
          </li>
          <li>
            <strong>Networking and Mobile Systems Lab</strong> – Research Assistant<br />
            Prediction of “time-killing” moments, LSTM for indoor-outdoor detection.
          </li>
        </ul>
      </div>
      <div className="mb-8">
        <h3 className="font-semibold text-lg mb-2 text-white">Selected Projects</h3>
        <ul className="text-neutral-3 list-disc list-inside">
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
      </div>
      <div>
        <h3 className="font-semibold text-lg mb-2 text-white">Publications</h3>
        <ul className="text-neutral-3 list-disc list-inside">
          <li>
            “Put it on the Top, I’ll Read it Later”: Smartphone Notifications. <i>CHI ’21.</i> <a href="https://doi.org/10.1145/3411764.3445384" target="_blank" rel="noopener noreferrer">[DOI]</a>
          </li>
          <li>
            “Mismatch between Attendance Order and Desired Display Order of Smartphone Notifications”. <i>UbiComp-ISWC’20.</i> <a href="https://doi.org/10.1145/3410530.3414384" target="_blank" rel="noopener noreferrer">[DOI]</a>
          </li>
        </ul>
      </div>
    </section>
  );
}