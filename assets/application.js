var claimIndex = 0;
showClaims();

function showClaims() {
    let claims = document.getElementById("claims").children;
    Array.from(claims).forEach(c => {c.style.display = "none"});

    claimIndex = Math.floor((Math.random() * claims.length) + 1);
    claims[claimIndex-1].style.display = "flex";
    setTimeout(showClaims, 10000);
}
