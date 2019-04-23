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

  $(".add-saved").on("click", async function() {
    let title = $(this).attr("data-article");
    await $.post("/api/save", { title: title });
    $(this).remove();
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
    $.post("/api/newScrape").then(url => {
      window.location = url;
    });
  });
});
