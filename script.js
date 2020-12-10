function pageLoad() {

/* egy to do webes felület letrehozasa.Legyen legalabb 10 sor benne,minden sorban egy checkbox,
amivel ki lehet pipalni hogy elkeszult a feladat,mellette legyen egy szöveges mezo amibe beirjuk 
a feladatot amit letre akarunk hozni,és egy törlesgomb,minden sorban.10 elemböl aljon,,de legyen gombnyomasra
 uj feladat letrehozasa gomb*/

 //0.Egy valtozoba eltaroljuk a root elemunket
let rootE = document.getElementById('root');

/*1.Egy változoba beleírjuk többsoros idézőjelek között egy divet,amibe beleírjuk a checkbox,szövegesmezo,delete gomb amire rarakunk
,egy delete classt*/
let item = `
<div class="listitem">
<input type="checkbox"></input>
<input type="text"></input>
<button class="delete">Delete</button>
</div>
`;

/*2.kell a valtozoba elmentenunk a 10 es szamot*/
let itemNumber = 10;

/*3.a forciklusba 10 ig elszamolsz es a root elemen belul insertAdjacentHTMLel beillesztuk.beforeend el kell letrehozni*/
for ( let i = 0; i < itemNumber; i++) {
    rootE.insertAdjacentHTML("beforeend", item);

}

/*4.insertAdjust kell majd addal root elemen kivul.Az att gomb hozzaadasa rooton kivul az insertel,ahoz hogy kivulre rakjuk az afterendet kell beallitanunk
pozícióba.*/
rootE.insertAdjacentHTML("afterend", `
    <button id="addItem">Add item</button>
`);

/*5.Klikkesemeny raadasa az addra,ennek lehet idja docum.getelementbyid.addeventlistenerclick,és létre kell hozni egy fuggvenyt,
amiben a klikkesemeny lefut.A klikkre azt a fent említett változot hozza adja a root elemehez amit megegyszer hozzaaadunk a 
az uj feladat letrehozasa gombhoz*/
function addNewItem() {
 root.insertAdjacentHTML("beforeend", item);
 //TODO valahogy itt kellene ratenni az uj elemre is a törles függvényt.
}
document.getElementById("addItem").addEventListener("click", addNewItem);
/*6.Ki kll jelolnunk az össze törles gombot,valtozoba, es ha valamelyikre kattintunk,akkor azt a sort toroljuk ki.mentsuk el queryselectorral az összes sort
majd,for ciklussal menjunk vegig az igy osszegyujtott html elemeinketn (a tömbön).a hosszusagat vesszuk alapul a for ciklusnal,es mindegyikre
rakjunk ra egy click esemenyt,amely torolni fog,az összes sorban levo torlos gombra ezt rarakjuk,amihez keszitunk egy fuggvenyt.*/ 
let deleteButtons = root.querySelectorAll(".delete");

function deleteItem(e) {
   // console.log("delete Button clicked");
   e.target.parentElement.remove();
}
for (let index = 0; index < deleteButtons.length; index++) {
    deleteButtons[index].addEventListener("click", deleteItem);
}

/*Az elkeszitett fuggvenyben a törles gombe befoglalo sorat kitoroljuk*/


}
window.addEventListener("load", pageLoad);
