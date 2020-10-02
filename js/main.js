var html='<div id="loadHtml"><img src="img/loading.gif" /></div>';
// 呈现loading效果
document.write(_LoadingHtml);


// 监听加载状态改变
document.onreadystatechange = completeLoading;

// 加载状态为complete时移除loading效果
function completeLoading() {
	if (document.readyState == "complete") {
		var ele = document.getElementById("loadHtml");
		ele.parentNode.removeChild(ele);
	}
}
