/// 바로가기 메뉴(.shortcu) 마우스 닿으면(mouseeenter), 숨겨진 하위 메뉴 덩어리 표시
const shortcu = document.querySelector(".shortcu");
const search_form = document.querySelector("#search_form");
shortcu.addEventListener("click",showLayer);

window.addEventListener("dblclick",hideLayer);
function hideLayer() {
    const layer1 = document.querySelector("#layer1");
    layer1.style.display ="none";
}
function showLayer() {
    //숨겨둔 레이어 찾아서 표시
    const layer1 = document.querySelector("#layer1");
    layer1.style.display ="block";
}
search_form.addEventListener("click",getResult);

function getResult(e) {
    e.preventDefault();
    fetch('http://localhost:3000/news')
      .then(response => response.json())
      .then(json => console.log(json))
}
