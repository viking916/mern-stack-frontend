import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Partner in workout</h1>
        </Link>
      </div>
    </header>
  );
};

export default Header;
