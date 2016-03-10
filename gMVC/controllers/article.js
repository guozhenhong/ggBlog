function list(){
	this.render("article_list.jade", {title: 'article list',
		articles : [{
			title : '2014-6-1',
			_id : 1,
		}, {
			title : '2014-6-9',
			_id : 2,
		},{
			title : '2014-6-19',
			_id : 3,
		}]});

	return 0;
}

function show(args){
	var ID = Number(args);
	if(ID == NaN){
		return -1;
	}
	var a = typeof ID;
	// console.log("!!!!!!!!!!!the number is " + args + " the type ID is " + a);
	this.render("article_show.jade", 
		{title:'blog', ID:args}
		);

	return 0;
}

exports.list = list;
exports.show = show;