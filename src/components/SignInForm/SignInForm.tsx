import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchUserByUsername } from "../../features/user/userAction";
import { PATH } from "../../constants/path";

import styles from "./SignInForm.module.css";

export const SignInForm = () => {
  const [username, setUsername] = useState("");
  const [validationError, setValidationError] = useState<string | null>(null);
  const dispatch = useAppDispatch();
  const { error, status } = useAppSelector((state) => state.user);
  const navigate = useNavigate();

  const validateUsername = (username: string): string | null => {
    if (!username.trim()) {
      return "Username is required.";
    }
    if (username.length < 3) {
      return "Username must be at least 3 characters long.";
    }
    return null;
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const error = validateUsername(username);
    if (error) {
      setValidationError(error);
    } else {
      setValidationError(null);
      dispatch(fetchUserByUsername(username));
    }
  };

  useEffect(() => {
    if (status === "succeeded") {
      navigate(PATH.HOME);
    }
  }, [status, navigate]);

  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <h2 className={styles.title}>Sign In</h2>
      <div className={styles.inputContainer}>
        <label htmlFor="username" className={styles.label}>
          Username
        </label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your username"
          className={`${styles.input} ${
            validationError ? styles.inputError : ""
          }`}
        />
        {validationError && (
          <p className={styles.validationError}>{validationError}</p>
        )}
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        className={styles.button}
      >
        {status === "loading" ? "Signing In..." : "Submit"}
      </button>
      {status === "failed" && <p className={styles.error}>{error}</p>}
    </form>
  );
};
