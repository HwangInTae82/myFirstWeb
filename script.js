document.addEventListener("DOMContentLoaded", function () {
    const categoryButton = document.getElementById("category-button");
    const categoryList = document.getElementById("category-list");

    // 드롭다운 열기 & 닫기
    categoryButton.addEventListener("click", function (event) {
        event.preventDefault(); // 페이지 이동 막기
        categoryList.style.display = categoryList.style.display === "block" ? "none" : "block";
    });

    // 카테고리 선택하면 텍스트 변경
    document.querySelectorAll("#category-list li").forEach(item => {
        item.addEventListener("click", function () {
            categoryButton.textContent = this.textContent + " ▼";
            categoryList.style.display = "none"; // 선택 후 드롭다운 닫기
        });
    });

    // 바깥 클릭하면 드롭다운 닫기
    document.addEventListener("click", function (event) {
        if (!categoryButton.contains(event.target) && !categoryList.contains(event.target)) {
            categoryList.style.display = "none";
        }
    });
});


document.getElementById('search-button').addEventListener('click', function () {
    var searchTerm = document.getElementById('search-input').value; // 텍스트박스의 값
    if (searchTerm) {
        var searchUrl = "https://www.coupang.com/np/search?q=" + encodeURIComponent(searchTerm) + "&channel=recent";
        window.location.href = searchUrl; // 검색 페이지로 이동 (URL 예시)
    } else {
        alert('검색어를 입력해주세요!');
    }
});
let images = document.querySelectorAll("#adImg img");
let index = 0;

function changeImage() {
    images[index].classList.remove("active"); // 현재 이미지 숨김
    index = (index + 1) % images.length; // 다음 이미지 인덱스로 변경
    images[index].classList.add("active"); // 새 이미지 표시
}
setInterval(changeImage, 3000); // 3초마다 이미지 변경

function star(){
   window.alert("Ctrl+D 키를 누르면 즐겨찾기에 추가하실 수 있습니다.");
}
