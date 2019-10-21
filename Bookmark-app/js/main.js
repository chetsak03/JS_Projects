document.getElementById("myForm").addEventListener("submit", saveBookmark);

function saveBookmark(e) {
  var sitename = document.getElementById("siteName").value;
  var siteUrl = document.getElementById("siteUrl").value;

  var bookmark = {
    name: sitename,
    url: siteUrl
  };
  var localBookmarksArray = [];
  if (localStorage.getItem("localBookmarks") === null) {
    localBookmarksArray.push(bookmark);
    localStorage.setItem("localBookmarks", JSON.stringify(localBookmarksArray));
  } else {
    localBookmarksArray = JSON.parse(localStorage.getItem("localBookmarks"));
    localBookmarksArray.push(bookmark);
    localStorage.setItem("localBookmarks", JSON.stringify(localBookmarksArray));
  }
  fetchBookmarks();
  e.preventDefault();
}
function deleteBookmark(url) {
  // Get bookmarks from localStorage
  var bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
  // Loop through the bookmarks
  for (var i = 0; i < bookmarks.length; i++) {
    if (bookmarks[i].url == url) {
      // Remove from array
      bookmarks.splice(i, 1);
    }
  }
  // Re-set back to localStorage
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));

  // Re-fetch bookmarks
  fetchBookmarks();
}

function fetchBookmarks() {
  if (localStorage.getItem("localBookmarks") === null) {
    // alert("No Bookamrk Available");
  } else {
    var localBookmarksArray = JSON.parse(
      localStorage.getItem("localBookmarks")
    );
    var bookmarkResults = document.getElementById("bookmarksResults");

    //   bookmarkResults.innerHTML = " ";
    for (var i = 0; i < localBookmarksArray.length; i++) {
      var name = localBookmarksArray[i].name;
      var url = localBookmarksArray[i].url;

      bookmarkResults.innerHTML +=
        '<div class="well">' +
        "<h3>" +
        name +
        ' <a class="btn btn-default" target="_blank" href="' +
        url +
        '">Visit</a> ' +
        " <a onclick=\"deleteBookmark('" +
        url +
        '\')" class="btn btn-danger" href="#">Delete</a> ' +
        "</h3>" +
        "</div>";
    }
  }
}
