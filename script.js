document.addEventListener("DOMContentLoaded", () => {

/* ---------- HOST TYPES ---------- */

const guestTypes = {

ceremony: {
content: `





 <p>Milí přátelé,</p>

<p>dovolujeme si Vám oznámit, že náš svatební obřad proběhne</p>
<p class="date">26. června 2026 ve 12.30</p>
<p>v kostele <a href="https://maps.app.goo.gl/4GN3yqso6upbCweV8" target="_blank">svatého Mikuláše na&nbspStaroměstském náměstí</a> v&nbspPraze.</p>

<p>Budeme moc rádi, když tento slavnostní okamžik zažijete s&nbspnámi.</p>

<div class="divider-line">
	<img src="symbol.svg" alt="Divider">
</div>

<p>Svatební blahopřání nás potěší na&nbspadrese Polská 3, Praha 2 – Vinohrady.</p> 



<div class="divider-line">
	<img src="symbol.svg" alt="Divider">
</div>

<p>Vaši Dana a Petr</p>



`
},

day: {
content: `
<p>Milí,</p>

<p>dovolujeme si oznámit, že náš svatební obřad proběhne</p>
<p class="date">26. června 2026 ve 12.30</p>
<p>v kostele <a href="https://maps.app.goo.gl/4GN3yqso6upbCweV8" target="_blank">svatého Mikuláše na&nbspStaroměstském náměstí</a> v&nbspPraze.</p>

<p>Budeme moc rádi, když tento slavnostní okamžik zažijete s&nbspnámi.</p>

<div class="divider-line">
	<img src="symbol.svg" alt="Divider">
</div>

<p>Po skončení obřadu Vás srdečně zveme ke svatebnímu stolu v restauraci<br>
<a href="https://maps.app.goo.gl/UBsyxJfkBDvV4y527" target="_blank">Bastion, Na Hradbách 2, Praha 2</a><br>
od 14.30.
</p>

<p>Prosíme o potvrzení účasti na <a href="mailto:beremese2606@gmail.com">beremese2606@gmail.com</a><br>
a o zaslání názvu písně, která by na oslavě neměla chybět.</p>

<div class="divider-line">
	<img src="symbol.svg" alt="Divider">
</div>


<p>Svatební blahopřání nám můžete zaslat na adresu Polská 3, 120 00 Praha 2 - Vinohrady. Pokud byste nás chtěli obdarovat i jinak, potěší nás příspěvek na svatební cestu.</p>
<img class="qr-code" src="evening.png" alt="QR kód">

<div class="divider-line">
	<img src="symbol.svg" alt="Divider">
</div>

<p>Vaši Dana a Petr</p>
`
},

evening: {
content: `
<p>Milí,</p>

<p>dovolujeme si oznámit, že náš svatební obřad proběhne</p>
<p class="date">26. června 2026 ve 12.30</p>
<p>v kostele <a href="https://maps.app.goo.gl/4GN3yqso6upbCweV8" target="_blank">svatého Mikuláše na&nbspStaroměstském náměstí</a> v&nbspPraze.</p>
<p>Budeme moc rádi, když tento slavnostní okamžik zažijete s&nbspnámi.</p>

<div class="divider-line">
	<img src="symbol.svg" alt="Divider">
</div>

<p>Zároveň Vás srdečně zveme na svatební veselí v restauraci<br>
<a href="https://maps.app.goo.gl/UBsyxJfkBDvV4y527" target="_blank">Bastion, Na Hradbách 2, Praha 2</a><br>
od 18.30.</p>

<p>Prosíme o potvrzení účasti na <a href="mailto:beremese2606@gmail.com">beremese2606@gmail.com</a><br>
a o zaslání názvu písně, která by na oslavě neměla chybět.</p>

<div class="divider-line">
	<img src="symbol.svg" alt="Divider">
</div>

<p>Svatební blahopřání nám můžete zaslat na adresu Polská 3, 120 00 Praha 2 - Vinohrady. Pokud byste nás chtěli obdarovat i jinak, potěší nás příspěvek na svatební cestu.</p>
<img class="qr-code" src="evening.png" alt="QR kód">

<div class="divider-line">
	<img src="symbol.svg" alt="Divider">
</div>

<p>Vaši Dana a Petr</p>
`
}

};


/* ---------- URL PARAM ---------- */

const params = new URLSearchParams(window.location.search);
let type = params.get("type") || "ceremony";

if(!guestTypes[type]){
type = "ceremony";
}

document.getElementById("guestContent").innerHTML = guestTypes[type].content;


/* ---------- ANIMACE ---------- */

const animation = document.getElementById("animation");
const card1 = document.querySelector(".card1");
const card2 = document.querySelector(".card2");
const ripple = document.querySelector(".ripple");

let state = 1;


/* ripple efekt */

function playRipple(){
    ripple.classList.remove("animate");
    void ripple.offsetWidth;
    ripple.classList.add("animate");
}


/* přepnutí karet */

function switchCards(){

    if(state === 1){
        card1.classList.remove("active");
        card2.classList.add("active");
        state = 2;
    }else{
        card2.classList.remove("active");
        card1.classList.add("active");
        state = 1;
    }

}


/* hlavní animace */

function playAnimation(){

    playRipple();

    setTimeout(() => {
        switchCards();
    },800);

}


/* první spuštění */

setTimeout(playAnimation,500);


/* nekonečná smyčka */

setInterval(playAnimation,3700);


/* kliknutí */

animation.addEventListener("click",playAnimation);

});