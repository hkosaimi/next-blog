import React from "react";

function Footer() {
  return (
    <footer className="mt-auto text-center text-zinc-400 py-5 px-5">
      <small>&copy; {new Date().getFullYear()} All right reserved</small>
    </footer>
  );
}

export default Footer;
