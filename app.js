addEventListener("load", () => {
  {
    let available = true;

    document.querySelector(".trigger").addEventListener("click", (e) => {
      if (available) {
        const menu = "./images/menu.png", close = "./images/close.png";

        e.target.classList.toggle("close");
        e.target.src = e.target.classList.contains("close") ? menu : close;

        const nav = document.querySelector(e.target.getAttribute("target"));
        nav.classList.toggle("hide");
        available = false;

        let t;
        if (nav.classList.contains("hide")) t = 0;
        else t = 600;
        setTimeout(() => available = true, t);
      }
    });
  }
  {
    let available = true, prevEle;

    document.querySelectorAll(".box").forEach(box => {
      box.addEventListener("click", (e) => {
        document.querySelector(".overlay").classList.toggle("active");
        document.querySelector(".overlay img").src = e.target.src;
        prevEle = e.target;
        prevEle.classList.toggle("toFit");
      });
    });

    document.querySelector(".overlay").onclick = () => {
      if (available) {
        prevEle.classList.toggle("toFit");
        document.querySelector(".overlay").classList.toggle("active");
      }

      available = false;
      setTimeout(() => available = true, 1000);
    }
  }
});