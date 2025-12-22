import React from "react";

const AuthButtons = ({ user, onLogin, onLogout }) => {
  return (
    <div style={styles.authBox}>
      {!user ? (
        <>
          <button style={styles.googleBtn} onClick={onLogin}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/300/300221.png"
              alt="Google"
              style={{ width: 18, marginRight: 8 }}
            />
            Sign in with Google
          </button>

          <button style={styles.normalBtn}>Login</button>
          <button style={styles.signupBtn}>Sign Up</button>
        </>
      ) : (
        <>
          <p style={{ fontSize: 14 }}>Welcome, <b>{user.name}</b></p>
          <button style={styles.logoutBtn} onClick={onLogout}>
            Logout
          </button>
        </>
      )}
    </div>
  );
};

const styles = {
  authBox: {
    width: "260px",
    padding: "20px",
    background: "#fff",
    borderRadius: "14px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
    textAlign: "center"
  },
  googleBtn: {
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "8px",
    border: "1px solid #ddd",
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#fff"
  },
  normalBtn: {
    width: "100%",
    padding: "10px",
    marginBottom: "8px",
    borderRadius: "8px",
    border: "none",
    background: "#1a73e8",
    color: "#fff",
    cursor: "pointer"
  },
  signupBtn: {
    width: "100%",
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #1a73e8",
    background: "#fff",
    color: "#1a73e8",
    cursor: "pointer"
  },
  logoutBtn: {
    width: "100%",
    padding: "10px",
    borderRadius: "8px",
    border: "none",
    background: "#e53935",
    color: "#fff",
    cursor: "pointer"
  }
};

export default AuthButtons;
