let cookie = document.querySelector(".cookie");
document.querySelectorAll(".size").forEach((item) => {
  item.addEventListener("click", (e) => {
    cookie.classList.add("cookieErase");
    sessionStorage.setItem("cookie", "1");
  });
});

if (sessionStorage.cookie) {
  cookie.classList.add("cookieErase");
}
