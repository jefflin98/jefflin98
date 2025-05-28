export default function Contact() {
  return (
    <section className="max-w-lg mx-auto mt-10">
      <h2 className="text-3xl font-bold mb-6 text-fg">Contact</h2>
      <p className="text-muted mb-4">
        Feel free to reach out! I'm always open to new opportunities, collaborations, or just a friendly chat.
      </p>
      <ul className="text-fg space-y-2">
        <li>
          <strong>Email:</strong> <a href="mailto:tl3097@columbia.edu" className="underline text-accent hover:text-fg">tl3097@columbia.edu</a>
        </li>
        <li>
          <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/tl3097" target="_blank" rel="noopener noreferrer" className="underline text-accent hover:text-fg">linkedin.com/in/tl3097</a>
        </li>
        <li>
          <strong>Location:</strong> Seattle, WA
        </li>
      </ul>
    </section>
  );
}