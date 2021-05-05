$(function () {
   $(".create-form").on("submit", function (event) {
      event.preventDefault();
      let newMikeismName = {
         name: $("#mikeism").val().trim(),
      };
      console.log(newMikeismName);
      $.ajax("/api/mikeisms", {
         type: "POST",
         data: newMikeismName
      }).then(
         function (data) {
            console.log("created new mikeism" + data);
            location.reload();
         }
      );
   });
   $(".understand-mikeism").on("click", function (event) {
      let id= $(this).data("id");
      let newUnderstoodState = { understood: true};
      $.ajax("/api/mikeisms/" + id, {
         type: "PUT",
         data: newUnderstoodState
      }).then(
         function () {
            console.log("mikeism" + id + "understood");
            location.reload();
         }
      );
   });
});