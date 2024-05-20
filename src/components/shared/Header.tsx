import type { Component } from "solid-js";

const Header: Component = () => {
  const handleNavToggle = (e: MouseEvent): void => {
    const navToggle = document.getElementById("mobile-nav-toggle");
    const primaryNav = document.getElementById("primary-navigation");
    let visibility = primaryNav?.getAttribute("data-visible");

    visibility = visibility === "false" ? "true" : "false";
    primaryNav?.setAttribute("data-visible", visibility);
    navToggle?.setAttribute('aria-expanded', visibility);
  };

  return (
    <header class="header">
      <div class="logo-container">
        <img class="logo svg-1" src='https://sapulse.blob.core.windows.net/pulse-bc/apps/porfolio/portfolio-logo-1.svg' alt='logo' />
        <img class="logo svg-2" src='https://sapulse.blob.core.windows.net/pulse-bc/apps/porfolio/david-portfolio.svg' alt='logo' />
      </div>
      <button
        id="mobile-nav-toggle"
        class="mobile-nav-toggle"
        aria-controls='primary-navigation'
        aria-expanded='false'
        onClick={handleNavToggle}>
        <span></span>
      </button>
      <nav>
        <ul data-visible='false' id='primary-navigation' class="primary-navigation">
          <li>
            <a href=''>
              <span aria-hidden='true'>01</span>bio
            </a>
          </li>
          <li>
            <a href=''>
              <span aria-hidden='true'>02</span>skills
            </a>
          </li>
          <li>
            <a href=''>
              <span aria-hidden='true'>03</span>projects
            </a>
          </li>
          <li>
            <a href=''>
              <span aria-hidden='true'>04</span>contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
