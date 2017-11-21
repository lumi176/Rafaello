var fs = require('fs');
fs.readdir("build/static/css",function(err,files){

	if(err){
		console.log(err.message);
	}
	else{
		//console.log(files[0]);
		fs.createReadStream('build/static/css/'+ files[0]).pipe(fs.createWriteStream('../backend/public/web/css/main.css'));
		
	}

});

fs.readdir("build/static/js",function(err,files){

	if(err){
		console.log(err.message);
	}
	else{
		//console.log(files[0]);
		fs.createReadStream('build/static/js/'+ files[0]).pipe(fs.createWriteStream('../backend/public/web/js/main.js'));
		
	}

});