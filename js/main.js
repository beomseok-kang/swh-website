((window, document) => {
  const header = document.querySelector("header");
  const onScroll = () => {
    if (window.scrollY === 0) {
      header.style.background = "none";
      header.querySelector(".logo").style.color = "#FFF";
    } else {
      header.style.background = "rgb(245, 250, 253)";
      header.querySelector(".logo").style.color = "rgb(0, 56, 234)";
    }
  };
  window.addEventListener("scroll", onScroll);
})(window, document);
