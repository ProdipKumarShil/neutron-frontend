import { Link } from "react-router-dom";

const Navbar = () => {
  
  return (
    <div className="navbar bg-neutral text-neutral-content">
      <Link to='/' className="btn btn-ghost text-xl">All Contacts</Link>
      <Link to='/addContact' className="btn btn-ghost text-xl" >
        Add Contacts
      </Link>
    </div>
  );
};

export default Navbar;
