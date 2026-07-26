export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>&lt;Indevmand/&gt; — developers, Philippines only.</span>
        <span>© {new Date().getFullYear()} Indevmand</span>
      </div>
    </footer>
  );
}
