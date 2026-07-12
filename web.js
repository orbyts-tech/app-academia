(function () {
  "use strict";

  var isDemo = new URLSearchParams(window.location.search).get("demo") === "1";
  var isWeb = window.matchMedia("(min-width: 1024px)").matches;

  if (window.matchMedia("(min-width: 1024px)").matches) {
    document.documentElement.classList.add("ffit-web");
    document.body.classList.add("ffit-web");
  }

  /* Banner removido */

  /* Relógio real na status bar */
  function updateClock() {
    var el = document.getElementById("ffit-clock");
    if (!el) return;
    var now = new Date();
    el.textContent = now.toLocaleTimeString("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  updateClock();
  setInterval(updateClock, 30000);

  /* Atualiza classe web ao redimensionar */
  window.matchMedia("(min-width: 1024px)").addEventListener("change", function (e) {
    document.documentElement.classList.toggle("ffit-web", e.matches);
    document.body.classList.toggle("ffit-web", e.matches);
  });

  /* Service worker apenas em produção / localhost */
  if ("serviceWorker" in navigator && location.protocol !== "file:") {
    window.addEventListener("load", function () {
      navigator.serviceWorker.register("./sw.js").catch(function () {});
    });
  }
})();
