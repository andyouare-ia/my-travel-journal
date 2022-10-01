import logo from '../../public/logo.svg'
export default function Header() {
  return (
    <nav>
      <img className="nav--logo" src={logo} alt="My Travel Journal logo" />
      <h1>my travel journal</h1>
    </nav>
  )
}
