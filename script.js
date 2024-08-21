const bookmarkBtn = document.getElementById("bookmarkBtn");
const bookmarkList = document.querySelector('.bookmarks');
const d = new Date()

bookmarkBtn.addEventListener('click',addBookmark);

function addBookmark(){
    const text = document.getElementById("textFeild").value;
    const url = document.getElementById("urlFeild").value;
    const markup = `
      <div class="bookmark-card">
            <p>${text} <span id="bookmarkId">0</span></p>
            <p id="date">Added On: ${d.getDate()+"/"+d.getMonth()+"/"+d.getFullYear()}</p>
            <a href="${url} class="btn wiew-btn" target="blank">View</a>
            <a href="#" class="btn btn-danger mx-4" target="blank">Delete</a>
        </div>
    `;
    bookmarkList.insertAdjacentHTML('afterbegin',markup);
}
