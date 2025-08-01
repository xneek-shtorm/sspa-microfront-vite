import React from "react";

import styles from './Button.module.css';

export default function Button(props) {
  const {
    children,
    disabled = false,
    loading = false,
    className = "",
    ...remainingProps
  } = props;
  const background =
    disabled || loading ? "opacity-50 bg-secondary" : "bg-warning";
  return (
    <button
      className={`mb-8 font-bold py-2 px-4 rounded ${background} ${className} ${styles.btn}`}
      disabled={disabled || loading}
      {...remainingProps}
    >
      {loading ? "Loading..." : children}
    </button>
  );
}