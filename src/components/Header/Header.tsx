import { Link } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { logout } from "../../features/user/userSlice";
import { PATH } from "../../constants/path";

import { ReactComponent as CompanyIcon } from "../../assets/company-icon.svg";
import styles from "./Header.module.css";

export const Header = () => {
  const user = useAppSelector((store) => store.user.user);
  const dispatch = useAppDispatch();

  const onLogout = () => dispatch(logout());

  return (
    <header className={styles["header-container"]}>
      <Link to={PATH.HOME} className={styles["company-info"]}>
        <CompanyIcon className={styles["company-icon"]} />
        <p className={styles["company-name"]}>Best Company</p>
      </Link>
      {user ? (
        <div className={styles["user-container"]}>
          <p>Hello, {user.username}!</p>
          <button className={styles["button"]} onClick={onLogout}>
            Logout
          </button>
        </div>
      ) : (
        <Link to={PATH.SIGN_IN}>
          <button className={styles["button"]}>Sign In</button>
        </Link>
      )}
    </header>
  );
};
