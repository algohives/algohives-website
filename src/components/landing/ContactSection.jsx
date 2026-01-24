export default function ContactSection() {
  return (
    <section className="section contact">
      <h2>Contact Us</h2>
      <form>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Message" required />
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}
