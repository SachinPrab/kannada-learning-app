import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="mb-0 flex gap-8 text-2xl font-bold justify-center bg-teal-100 h-full w-full ">
      <Link to="/about" className="hover:underline text-blue-700 mt-5">About Us</Link>
      <Link to="/" className='hover:underline text-blue-700 mt-5 ml-7'>Home</Link>
    </nav>
  )
}

export default Navbar