import logo from '../img/reactjs-icon.svg'
export default function  Navbar() {
	return (
		<nav className='navbar'>
			<img className='navbar-img' src={logo} alt='logo'/>
			<h2 className='navbar-header'>ReactFacts</h2>
			<h3 className='navbar-name'>React Course - Project 1</h3>
		</nav>
	)
}