const toast = document.querySelector(".system-toast");

document.addEventListener("click", (event) => {
  const trigger = event.target.closest("[data-demo-action]");
  if (!trigger || !toast) return;

  toast.hidden = false;
  window.setTimeout(() => {
    toast.hidden = true;
  }, 2400);
});
