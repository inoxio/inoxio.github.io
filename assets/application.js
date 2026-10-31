Array.prototype.random = function () {
  return this[Math.floor(Math.random() * this.length)];
};

const claimsByLang = {
  de: [
    {
      heading:
        "... wenn man zum Tiefseetauchen lediglich einen Schnorchel mitbringt.",
      image: "img/snorkel.png",
    },
    {
      heading:
        "... wenn man für alles immer nur einen Hammer benutzt, obwohl die Werkzeugkiste prall gefüllt ist",
      image: "img/hammer.png",
    },
    {
      heading:
        "... wenn man für einen 100m Sprint die Laufschuhe erst nach 90m anzieht.",
      image: "img/runner.png",
    },
  ],
  en: [
    {
      heading:
        "... going deep-sea diving with nothing but a snorkel.",
      image: "img/snorkel.png",
    },
    {
      heading:
        "... using a hammer for everything even though the toolbox is full",
      image: "img/hammer.png",
    },
    {
      heading:
        "... putting on your running shoes only after 90m of a 100m sprint.",
      image: "img/runner.png",
    },
  ],
};
const claims = claimsByLang[document.documentElement.lang] || claimsByLang.de;


if (document.getElementById("claimtext")) showClaims();

function showClaims() {
  const claim = claims.random();
  document.getElementById("claimtext").textContent = claim.heading;
  document.getElementById("claimimage").src = `/assets/${claim.image}`;
  // setTimeout(showClaims, 5000);
}

const revealTargets = document.querySelectorAll(
  "#services .card, #beliefs .card, #mminks-profile li, #mminks-beliefs li, #facts .content > div, .contact-card, .about-card"
);
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) =>
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      }),
    { threshold: 0.15 }
  );
  revealTargets.forEach((el) => {
    el.classList.add("reveal");
    observer.observe(el);
  });
}

document
  .querySelectorAll("#mminks-profile li, #mminks-beliefs li")
  .forEach((li) => {
    const title = li.querySelector("strong");
    const next = title && title.nextSibling;
    if (next && next.nodeType === Node.TEXT_NODE) {
      next.textContent = next.textContent.replace(/^\s*:\s*/, "");
    }
  });

document.querySelectorAll("#mminks-projects code").forEach((code) => {
  const tags = code.textContent.trim().split(/\s+/);
  const wrap = document.createElement("span");
  wrap.className = "tags";
  tags.forEach((tag) => {
    const chip = document.createElement("code");
    chip.textContent = tag;
    wrap.appendChild(chip);
  });
  code.replaceWith(wrap);
});
