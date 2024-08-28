import { Link } from "react-router-dom";

import { ReactComponent as CompanyIcon } from "../../assets/company-icon.svg";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles["header-container"]}>
      <Link to="/" className={styles["company-info"]}>
          <CompanyIcon className={styles["company-icon"]} />
          <p className={styles["company-name"]}>Best Company</p>
      </Link>
      <Link to="/sign-in">
        <button>Sign In</button>
      </Link>
    </header>
  );
};
