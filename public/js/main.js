function updateComments() {
  $.get("/api/comments", data => {
    console.log(data);
  });
}

$(document).ready(() => {
  $(".collapsible").collapsible();

  $(".submit-comment").on("click", function() {
    let title = $(this).attr("data-article");
    let commentId = $(this).attr("data-input-id");
    let comment = $(`#${commentId}`).val();
    let post = { title: title, comment: comment };
    $.post("/api/comment", post).then(() => {
      window.location = window.location;
    });
    $(`#${commentId}`).val("");
  });

  $("#clear-saved").on("click", function() {
    $.ajax({
      url: "/api/clear",
      type: "put"
    }).then(url => {
      window.location = url;
    });
  });

  $("#scrape").on("click", function(event) {
    $.post("/api/newScrape").then(() => {
      window.location = "/";
    });
  });
});
