document.addEventListener("DOMContentLoaded", () => {
  const root = document.documentElement;
  const toggle = document.querySelector(".theme-toggle");

  if (toggle) {
    toggle.addEventListener("click", () => {
      root.classList.toggle("theme-dark");
      localStorage.setItem(
        "portfolio-theme",
        root.classList.contains("theme-dark") ? "dark" : "light"
      );
    });
  }

  const revealTargets = document.querySelectorAll(
    ".hero-copy, .profile-card, .page-hero .container, .section-heading, .panel, .project-card"
  );

  revealTargets.forEach((element, index) => {
    element.classList.add("reveal");
    element.classList.add(`reveal-delay-${index % 4}`);
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.14,
      rootMargin: "0px 0px -40px 0px"
    }
  );

  revealTargets.forEach((element) => observer.observe(element));
});
