import "./Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <p className="site-footer__text">
          <strong>FAAIZ — Student Grade Displayer</strong>
        </p>
        <p className="site-footer__disclaimer">
          This is a personal academic dashboard for reference purposes only. It is
          not an official college website or portal. Grade-point calculations are
          indicative and must be verified against official Anna University regulations.
        </p>
        <p className="site-footer__copy">
          © {new Date().getFullYear()} A Mohammed Faaiz
        </p>
      </div>
    </footer>
  );
}
