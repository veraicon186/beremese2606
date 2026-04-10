document.addEventListener("DOMContentLoaded", () => {

/* ---------- HOST TYPES ---------- */

const guestTypes = {

ceremony: {
content: `





 <p>Milí přátelé,</p>

<p>dovolujeme si Vám oznámit, že náš svatební obřad proběhne</p>
<p class="date">26. června 2026 ve&nbsp;12.30</p>
<p><a href="https://maps.app.goo.gl/4GN3yqso6upbCweV8" target="_blank">v&nbsp;kostele svatého Mikuláše </a>na&nbsp;Staroměstském náměstí v&nbsp;Praze.</p>

<p>Budeme moc rádi, když tento slavnostní okamžik zažijete s&nbspnámi.</p>

<div class="divider-line">
	<img src="symbol.svg" alt="Divider">
</div>

<p>Svatební blahopřání nás potěší na&nbspadrese Polská&nbsp;3, Praha&nbsp;2&nbsp;–&nbsp;Vinohrady.</p> 



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
<p class="date">26. června 2026 ve&nbsp;12.30</p>
<p><a href="https://maps.app.goo.gl/4GN3yqso6upbCweV8" target="_blank">v kostele svatého Mikuláše </a>na&nbspStaroměstském náměstí v&nbspPraze.</p>

<p>Budeme moc rádi, když tento slavnostní okamžik zažijete s&nbspnámi.</p>

<div class="divider-line">
	<img src="symbol.svg" alt="Divider">
</div>

<p>Po skončení obřadu Vás srdečně</p> 
<p class="invitation">zveme ke&nbsp;svatebnímu stolu</p>
<p>od&nbsp;14.30 v&nbsp;restauraci 
<a href="https://maps.app.goo.gl/UBsyxJfkBDvV4y527" target="_blank">Bastion, Na&nbsp;Hradbách&nbsp;2, Praha&nbsp;2</a>.
</p>

<p>Prosíme o potvrzení účasti na&nbsp;<a href="mailto:beremese2606@gmail.com">beremese2606@gmail.com</a><br>
a zaslání názvu písně, která by na oslavě neměla chybět.</p>

<div class="divider-line">
	<img src="symbol.svg" alt="Divider">
</div>


<p>Svatební blahopřání nám můžete zaslat na&nbsp;adresu Polská&nbsp;3, 120 00 Praha&nbsp;2&nbsp;–&nbsp;Vinohrady. Pokud byste nás chtěli obdarovat i&nbsp;jinak, potěší nás příspěvek na&nbsp;svatební cestu.</p>
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
<p class="date">26. června 2026 ve&nbsp;12.30</p>
<p><a href="https://maps.app.goo.gl/4GN3yqso6upbCweV8" target="_blank">v&nbsp;kostele svatého Mikuláše </a>na&nbsp;Staroměstském náměstí v&nbsp;Praze.</p>
<p>Budeme moc rádi, když tento slavnostní okamžik zažijete s&nbsp;námi.</p>

<div class="divider-line">
	<img src="symbol.svg" alt="Divider">
</div>

<p>Zároveň Vás srdečně  

<p class="invitation">zveme na svatební veselí</p>
<p> od&nbsp;18.30 v&nbsp;restauraci<br>
<a href="https://maps.app.goo.gl/UBsyxJfkBDvV4y527" target="_blank">Bastion, Na&nbsp;Hradbách&nbsp;2, Praha&nbsp;2</a>.</p>

<p>Prosíme o potvrzení účasti na&nbsp;<a href="mailto:beremese2606@gmail.com">beremese2606@gmail.com</a><br>
a zaslání názvu písně, která by na oslavě neměla chybět.</p>

<div class="divider-line">
	<img src="symbol.svg" alt="Divider">
</div>

<p>Svatební blahopřání nám můžete zaslat na&nbsp;adresu Polská&nbsp;3, 120 00 Praha&nbsp;2&nbsp;–&nbsp;Vinohrady. Pokud byste nás chtěli obdarovat i&nbsp;jinak, potěší nás příspěvek na&nbsp;svatební cestu.</p>
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