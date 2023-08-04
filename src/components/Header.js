import Logo from "./logo512.png";

function Header() {
  return (
    <header>
      <img src={Logo} alt="React quiz app" />
      <h1>اختبر معرفتك الدينية مع ريآكت</h1>
    </header>
  );
}

export default Header;
