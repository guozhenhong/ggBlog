exports.home = function(){
	// console.log("In home fuction");
	this.render("home.jade", {title : '首页',
		blogs : [{
			title : '2014-6-1',
			_id : 1,
			poster : "ab.jpg"
		}, {
			title : '2014-6-9',
			_id : 2,
			poster : "ab.jpg"
		},{
			title : '2014-6-19',
			_id : 3,
			poster : "ab.jpg"
		}]});
}