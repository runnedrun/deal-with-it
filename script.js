var button = $()

$(function() {
  button.click(dealWithIt)
})

function dealWithIt() {
    $("#glasses").animate({}, 1500)
}