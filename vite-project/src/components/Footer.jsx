function Footer() {
  return (
    <footer className="footer">
      <p><strong>Creado por:</strong> Cristian David Betts Sarmiento</p>
      <p>
        <strong>Correos:</strong> 
        <a href="mailto:cristiandavid.betts@gmail.com"> cristiandavid.betts@gmail.com</a> |
        <a href="mailto:cristianbetts.dev@gmail.com"> cristianbetts.dev@gmail.com</a>
      </p>
      <p>
        <strong>Teléfonos:</strong> 
        <span> Llamadas: +57 300 123 4567</span> |
        <span> WhatsApp: +57 312 987 6543</span>
      </p>
      <p>© {new Date().getFullYear()} GameTracker — Todos los derechos reservados.</p>
    </footer>
  );
}
export default Footer;
