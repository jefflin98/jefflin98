export default function Contact() {
  return (
    <section className="max-w-lg mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4 text-white">Contact</h2>
      <p className="text-neutral-3 mb-4">
        Feel free to reach out! I'm always open to new opportunities, collaborations, or just a friendly chat.
      </p>
      <ul className="text-neutral-3 space-y-2">
        <li>
          <strong>Email:</strong> <a href="mailto:tl3097@columbia.edu" className="underline hover:text-white">tl3097@columbia.edu</a>
        </li>
        <li>
          <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/tl3097" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">linkedin.com/in/tl3097</a>
        </li>
        <li>
          <strong>Location:</strong> Seattle, WA
        </li>
      </ul>
    </section>
  );
}