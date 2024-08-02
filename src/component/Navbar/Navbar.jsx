import { NavLink } from 'react-router-dom'

export default function Navbar() {
    return <>
    <nav className='nav-color'>
        <div className='container'>
            <div>
                <ul className='flex justify-around py-2 items-center text-white'>
                    <h2 className='navbar-item1'><a to="Home">START FRAMEWORK</a></h2>
                    <div className='flex navbar-item2'>
                    <li className='px-10'><NavLink to="about">ABOUT</NavLink></li>
                    <li className='px-10'><NavLink to="PROTFILO">PROTFILO</NavLink></li>
                    <li className='px-10'><NavLink to="CONTACT">CONTACT</NavLink></li>
                    </div>
                </ul>
            </div>
        </div>
    </nav>
    
    </>
}
