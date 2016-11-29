var dealt = false;

var button = $(".deal-with-it-button")

$(function() {
  button.click(dealWithIt)
})

function dealWithIt() {
    $("#glasses").animate({}, 1500)
}