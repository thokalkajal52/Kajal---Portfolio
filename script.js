// Kajal Thokal portfolio: small enhancements. The page works without this file.

// 1) Show the current year in the footer
var year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

// 2) Highlight the menu link for the section on screen
var links = document.querySelectorAll('nav a[href^="#"]');
var sections = [];
links.forEach(function (link) {
  var id = link.getAttribute("href").slice(1);
  var el = document.getElementById(id);
  if (el) sections.push({ link: link, el: el });
});

if ("IntersectionObserver" in window && sections.length) {
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      links.forEach(function (l) { l.removeAttribute("aria-current"); });
      sections.forEach(function (s) {
        if (s.el === entry.target) s.link.setAttribute("aria-current", "true");
      });
    });
  }, { rootMargin: "-40% 0px -55% 0px" });
  sections.forEach(function (s) { observer.observe(s.el); });
}
