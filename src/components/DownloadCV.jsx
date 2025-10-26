export default function DownloadCV() {

  return (
    <section className="download-cv container">
      <h3 id="cv">Download CV</h3>
      
      <p className="intro">
        Get a PDF version of my CV.
      </p>
      <a
        className="btn ghost"
        href="/files/NeddyMugala_CV.pdf"
        download
      >
        📄 Download PDF
      </a>
    </section>
  );
}
