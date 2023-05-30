import NavItem from "./navItem"
import img from '../../img/logo.png'

const Navbar = () => {
    const navItems = [
    {id: 1, name: "Home",url:"#"},
    {id: 2, name: "About",url:"#"},
    {id: 3, name: "Services",url:"#"},
    {id: 4, name: "Projects",url:"#"},
    {id: 5, name: "Blog",url:"#"},
    {id: 6, name: "Contact",url:"#"},
    ]
  
    
  return (
    <div className="header__bg">
				<div className="container">
					<div className="header__content">

						<a href="#"><img src={img} alt="Logo"  /></a>

						<nav className="navigation">
							{
                                navItems.map(item => <NavItem key={item.id} item={item}/>)
                            }
						</nav>

						<div>
							<a href="#" className="header__icon burger"><i className="ti-align-justify"></i></a>
                            <a href="#" className="header__icon" ><i className="ti-search"></i></a>
							<a href="#" className="header__icon"><i className="ti-shopping-cart"></i></a>
							<a href="#" className="header__icon"><i className="ti-heart"></i></a>
						</div>
                       
					</div>
				</div>
			</div> 
  )
}

export default Navbar