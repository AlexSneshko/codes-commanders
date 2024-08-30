import { SignInForm } from "../../components/SignInForm/SignInForm"

import styles from "./SignInPage.module.css"

export const SignInPage = () => {
  return (
    <div className={styles["sign-in-page"]}>
      <SignInForm/>
    </div>
  )
}
