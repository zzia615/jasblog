$(function () {
  $('[data-toggle="popover"]').popover()
})
$('#giveMeMoney').popover({
	html:true,
    trigger: 'focus',
	placement:"top",
	content:function(){
		return '<img src="img/pay-wechat.png" width="200px" height="280px"></img>'
	}
})