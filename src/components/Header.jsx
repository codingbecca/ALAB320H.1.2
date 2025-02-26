import './Header.css'

export default function Header() {
    return (
        <div>
            <h1>Sartre's List</h1>
            <h2>Better-Dressed People</h2>
            <nav aria-label="Main Navigation" role="navigation">
                <ul className='nav'>
                    <li><a href="#" className='mainNavLink'>Women's</a></li>
                    <li><a href="#" className='mainNavLink'>Men's</a></li>
                    <li><a href="#" className='mainNavLink'>On the Street</a></li>
                    <li><a href="#" className='mainNavLink'>The Catwalk</a></li>
                    <li><a href="#" className='mainNavLink'>AdWatch</a></li>
                    <li><a href="#" className='mainNavLink'>About</a></li>
                </ul>
            </nav>
        </div>
    )
}