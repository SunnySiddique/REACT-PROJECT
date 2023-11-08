import Account from "./Account";
import classes from "../styles/Nav.module.css";
import logo from "../assets/image/S logo.avif";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <Link to="/" className={classes.brand}>
            <img src={logo} alt="Learn with Sumit Logo" />
            <h3>Sunny Siddique Bijoy</h3>
          </Link>
        </li>
      </ul>
      <Account />
    </nav>
  );
}
