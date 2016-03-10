exports.home = function(){
	// console.log("In home fuction");
	this.render("home.jade", { 
		title : '首页',
		blogs : [{
			title : "first",
			_id : 1,
			poster : "ab.jpg",
			date: "2014-6-1"
		}, {
			title : 'second',
			_id : 2,
			poster : "ab.jpg",
			date: "2014-6-1"

		},{
			title : 'third',
			_id : 3,
			poster : "ab.jpg",
			date: "2014-6-1"

		}]});
}