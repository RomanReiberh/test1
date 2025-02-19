var renderCases = () => {
var cases = JSON.parse(localStorage.getItem("cases"));
if (cases) {
const list = document.getElementById("list");
list.innerHTML = ""; 
cases.forEach((caseItem) => {
var caseElement = document.createElement("li");
caseElement.innerHTML = caseItem;
list.append(caseElement);
});
}
};
        
var writeCases = () => {
var input = document.getElementById("input"); 
if (input.value) {
var cases = JSON.parse(localStorage.getItem("cases")) || []; 
        
cases.push(input.value); 
localStorage.setItem("cases", JSON.stringify(cases)); 
input.value = ""; 
renderCases(); 
}};