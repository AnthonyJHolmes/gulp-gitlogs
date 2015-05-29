# gulp-gitlogs
##A Gulp plugin that create a log file in the current directory containing logs specified with/out a prefix between the current and second most recent tag. 

**Usage**

Used to generate logs for between the current tag and the second most recent tag.
Useful to see what was done between builds. Using --grep specifies a prefix for which you
would like to search for in the commits between the current and second most recent tags.
As you can see in the example below I used: --grep="DONE" so I am searching for all commits 
with the word DONE. 

By default a file called log.txt is created with the messages in the same directory for which the gulp task was called.

**I plan on making this better in time**

___
**Install**

```npm install gulp-gitlogs```
___
**Example**

```javascript
var gitlogs = require('gulp-gitlogs');

gulp.task('default', function(){
  return gitlogs({args : ' --grep="DONE"'}, function (err, stdout) {
   console.log(err);
	});
})
```

**API**
___

Coming soon

