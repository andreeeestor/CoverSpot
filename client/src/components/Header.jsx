import logo from "../assets/coverspot 3.png"

export default function Header() {
  return (
    <header>
      <div className="pr-6">
        <img  src={logo} alt="CoverSpot Logo" />
      </div>
      <nav>
        <ul className="flex gap-x-5 text-[#007bff] transition-all">
          <li>
            <a href="#" className="hover:text-[#0056b3] transition-all">Página inicial</a>
          </li>
          <li>
            <a href="#" className="hover:text-[#0056b3] transition-all">Sobre nós</a>
          </li>
          <li>
            <a href="#" className="hover:text-[#0056b3] transition-all">Comunidade</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
