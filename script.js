var boxes = ["#box1", "#box2", "#box3"];
var icons = ["#icon1", "#icon2", "#icon3"];
var j = 0;
for(var h = 0; h < icons.length;h++){
	$(icons[h]).hide(0);
}

var showing = function(){
	$(icons[j]).show(500);
	j++;
}
setInterval(showing,350);

for( var  i = 0; i < boxes.length; i++){
	$(boxes[i]).slideUp(0).slideDown(1000);
}
$("#p").hide(0).show(1000);
$("#box").hide(0).show(1000);
