import { useLocation, Link } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const isArsip = location.pathname === "/arsip";
  return (
    <header className="app-header">
      <h1>Aplikasi Catatan</h1>
      {isArsip ? (
        <Link className="arsip-link" to="/">
          Kembali
        </Link>
      ) : (
        <Link className="arsip-link" to="/arsip">
          Arsip
        </Link>
      )}
    </header>
  );
}