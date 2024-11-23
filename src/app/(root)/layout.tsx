import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  <main className="auth">
    <div className="root-container">
      <div className="wrapper">
        {children}
      </div>
    </div>
  </main>
}

export default Layout;
