if ("serviceWorker" in navigator) addEventListener("load", () => navigator.serviceWorker.register("./sw.js").catch(() => {}));
let deferred;
addEventListener("beforeinstallprompt", e => {
  e.preventDefault(); deferred = e;
  const b = document.getElementById("inst"); if (b) b.hidden = false;
});
const ib = document.getElementById("inst");
if (ib) ib.addEventListener("click", async () => {
  if (!deferred) return;
  deferred.prompt(); await deferred.userChoice; deferred = null; ib.hidden = true;
});
