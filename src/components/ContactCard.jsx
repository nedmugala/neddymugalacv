export default function ContactCard() {
  return (
    <aside className="contact-card container">
      <div className="card-header">
        <div className="icon">NM</div>
        <div className="contact-info">
          <div className="name">Neddy Mugala</div>
          <div className="location">Lusaka, Zambia • Remote Available</div>
        </div>
      </div>

      <div className="description">
        Smart communicator • Self-taught developer • Fast learner
      </div>

      <div className="contact-details">
        <div>
          <strong>Phone:</strong> +260 765 076 972
        </div>
        <div>
          <strong>Email:</strong> <a href="mailto:nedmugala@gmail.com">nedmugala@gmail.com</a>
        </div>
        <div>
          <strong>GitHub:</strong> <a href="https://github.com/nedmugala" target="_blank" rel="noopener noreferrer">
            github.com/nedmugala
          </a>
        </div>
      </div>

      <div className="contact-actions">
        <a className="btn" href="mailto:nedmugala@gmail.com">✉️ Email Me</a>
        <a className="btn ghost" href="tel:+260765076972">📞 Call</a>
        <a className="btn secondary" href="https://github.com/nedmugala" target="_blank" rel="noopener noreferrer">💻 GitHub</a>
      </div>
    </aside>
  );
}
