# gulp-gitlogs
A Gulp plugin which allows you to create a log file. 
**NOT COMPLETED YET**
**Work in progress**
_________________________________________________________________________________

Usage

Install

Example
```
var gitlogs = require("gulp-gitlogs");

gulp.task("log", function(){
  gitlogs.log({args: '--grep="new" --grep ="done"'}, function (err, stdout) {
    if (err) throw err;
  });
});
```

API

License
