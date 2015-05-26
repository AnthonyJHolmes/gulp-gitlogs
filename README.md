# gulp-gitlogs
####A Gulp plugin which allows you to create a log file. 
___
#####NOT COMPLETED YET, DO NOT DOWNLOAD, JUST TESTING AT THE MOMENT.
___

#####Usage
Used to generate logs for between two builds.
___
#####Install

```npm install gulp-gitlogs```
___
#####Example

```
var gitlogs = require('gulp-gitlogs');

gulp.task('default', function(){
  return gitlogs({args : ' --grep="DONE" --pretty=format:%s > log.txt'}, function (err, stdout) {
   console.log(err);
	});
})
```

#####API
___

Coming soon
