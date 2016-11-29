var dealt = false;

var button = $(".deal-with-it-button")

$(function() {
  button.click(dealWithIt)
})

function dealWithIt() {
  if (dealt) {
    $("#glasses").css({"top":  "-20px"})		

    dealt = false
    button.val("Deal With It")
  } else {
    $("#glasses").animate({
      "top":  250
    }, 1500)

    dealt = true
    button.val("Reset")
  }
}