/// 바로가기 메뉴(.shortcu) 마우스 닿으면(mouseeenter), 숨겨진 하위 메뉴 덩어리 표시
const shortcu = document.querySelector(".shortcu");

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