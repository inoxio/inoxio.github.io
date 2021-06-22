Array.prototype.random = function () {
  return this[Math.floor(Math.random() * this.length)];
};

const claims = [
  {
    heading:
      "... wenn man zum Tiefseetauchen lediglich einen Schnorchel bringt.",
    image: "img/snorkel.png",
  },
  {
    heading:
      "... wenn man für alles immer nur einen Hammer benutzt, obwohl die Werkzeugkiste prall gefüllt ist",
    image: "img/hammer.png",
  },
  // {
  //     heading: '... wenn der Mechaniker in der Werkstatt bei einem Motorschaden das Auto nur von außen begutachtet.',
  //     image: 'img/mechanic.jpg',
  // },
  // {
  //     heading: '... wenn man ein Sieben-Gänge-Menü nur mit einer Gabel isst.',
  //     image: 'img/cutlery.jpg',
  // },
  {
    heading:
      "... wenn man für einen 100m Sprint die Laufschuhe erst nach 90m anzieht.",
    image: "img/runner.png",
  },
  // {
  //   heading:
  //     "... wenn man für Double Chocolate Cookies, ausschließlich im Nachhinein Schokostreusel auf die Kekse streut.",
  //   image: "img/chocolate-cookie.png",
  // },
];

showClaims();

function showClaims() {
  const claim = claims.random();
  document.getElementById("claimtext").textContent = claim.heading;
  document.getElementById("claimimage").src = `/assets/${claim.image}`;
  // setTimeout(showClaims, 5000);
}
