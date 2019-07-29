//When you go to the shopping list and click the button delete, the event should traverse two levels up the parent element and remove the element from the shopping list entirely
$(function() {
  $(".shopping-list").on("click", ".shopping-item-delete", function(e) {
    $(e.currentTarget)
      .parent()
      .parent()
      .remove();
  });

  // This is saying when you traverse up pass parents to the siblings which is the class shopping item. when you click the button Check it should toggle between crossing out the item name and leaving uncrossed out.
  $(".shopping-list").on("click", ".shopping-item-toggle", function(e) {
    $(e.currentTarget)
      .parent()
      .siblings(".shopping-item")
      .toggleClass("shopping-item__checked");
  });

  //This is saying that we are preventing the vent of submitting this form somewhere
  // As you enter an entry to the shopping list you are inserting the specified content to the end of the shopping list
  $("#js-shopping-list-form").submit(function(e) {
    e.preventDefault();
    let item = $("#shopping-list-entry").val();
    $(".shopping-list").append(`<li>
    <span class="shopping-item">${item}</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
    </div>
  </li>`);
  });
});
