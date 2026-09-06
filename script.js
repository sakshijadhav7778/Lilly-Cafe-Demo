/* ================= MOBILE MENU ================= */

const toggle = document.querySelector(".menu-toggle");
const mobileNav = document.querySelector(".mobile-nav");


toggle.addEventListener("click", () => {

  const open = mobileNav.classList.toggle("open");

  toggle.setAttribute("aria-expanded", open);

});


document.querySelectorAll(".mobile-nav a").forEach(link => {

  link.addEventListener("click", () => {

    mobileNav.classList.remove("open");

    toggle.setAttribute("aria-expanded", "false");

  });

});



/* ================= MENU FILTERING ================= */

const tabs = document.querySelectorAll(".menu-tabs button");
const cards = document.querySelectorAll(".menu-card");


tabs.forEach(tab => {

  tab.addEventListener("click", () => {

    tabs.forEach(t => {
      t.classList.remove("active");
    });

    tab.classList.add("active");


    const filter = tab.dataset.filter;


    cards.forEach(card => {

      const show =
        filter === "all" ||
        card.dataset.type === filter;

      card.classList.toggle("hidden", !show);

    });

  });

});



/* ================= SCROLL REVEAL ================= */

const revealItems = document.querySelectorAll(
  ".story-title, .story-text, .story-image, .menu-card, .space-photo, .moment-list article, .moments-photo, .detail"
);


const observer = new IntersectionObserver(

  (entries) => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        entry.target.animate(

          [
            {
              opacity: 0,
              transform: "translateY(22px)"
            },

            {
              opacity: 1,
              transform: "translateY(0)"
            }
          ],

          {
            duration:700,
            easing:"cubic-bezier(.2,.7,.2,1)",
            fill:"forwards"
          }

        );

        observer.unobserve(entry.target);

      }

    });

  },

  {
    threshold:0.12
  }

);


revealItems.forEach(item => {

  observer.observe(item);

});



/* ================= HERO PARALLAX ================= */

const heroPhoto = document.querySelector(".hero-photo");


window.addEventListener(

  "scroll",

  () => {

    if (!heroPhoto) return;

    const y = Math.min(
      window.scrollY * 0.05,
      25
    );

    heroPhoto.style.transform =
      `translateY(${y}px)`;

  },

  {
    passive:true
  }

);