// Light / dark / system theme switch. The initial theme is applied inline in <head> to avoid a flash.
(function () {
  var KEY = "sb-theme";
  var root = document.documentElement;

  function current() {
    try { return localStorage.getItem(KEY) || "system"; } catch (e) { return "system"; }
  }

  function apply(choice) {
    if (choice === "light" || choice === "dark") root.dataset.theme = choice;
    else delete root.dataset.theme;
    document.querySelectorAll("[data-theme-value]").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.dataset.themeValue === choice));
    });
  }

  function save(choice) {
    try {
      if (choice === "system") localStorage.removeItem(KEY);
      else localStorage.setItem(KEY, choice);
    } catch (e) {}
  }

  document.querySelectorAll("[data-theme-value]").forEach(function (b) {
    b.addEventListener("click", function () {
      save(b.dataset.themeValue);
      apply(b.dataset.themeValue);
    });
  });

  apply(current());
})();
