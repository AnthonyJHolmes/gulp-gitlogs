var gulp 		= require('gulp');
var	gutil 		= require('gulp-util');
//var	exec		= require('child_process').exec;
var git 		= require('gulp-git');
var File 		= require('vinyl');
var PluginError = gutil.PluginError;
var	argv		= require('yargs')
	.usage('Usage: $0 -e [email address which you want it sent too] ')
	.example('$0 -e bob@gmail.com -p "done"')
	.options({
		'e':{
			alias:'email',
			demand:true,
			describe:'Send to email address',
			//type: 'string'
		},
		'p':{
			alias: 'prefix',
			demand:false,
			describe:'Refine log searches with prefix\'s',
			//type:'string'
		},
		'f':{
			alias:'format',
			demand:false,
			default: '%s' ,//TBD at a later stage
			//other formatting options include %an for author, %ar when it was done 
			describe:'Format the logs to make it look nice'
		}
	})
	.help('h')
	.alias('h', 'help')
	.showHelpOnFail(false, "Specify --help for available options")
	.epilogue('For more information check out our manual at http://mynicewebsite.com/mygulpplugin')
	.argv;


const PLUGIN_NAME = 'git-logs-to-email'; //change name at another stage
function gitlogs(stuff){
	var current_build = "";
	var logfile = new File({
		cwd:   "/",
		base:  "/log/",
		path:  "/log/log.txt"
	})
	if(!stuff){
		throw new PluginError(PLUGIN_NAME,'stuff missing');
	}
	git.exec({args: 'describe --tags --abbrev=0'}, function(err,stdout){
		if (err) throw err;
		current_build = stdout;
	});
	git.exec({args: 'log '+current_build+'..head '}, function(err, stdout){
		if (err) throw err;
		logfile.contents: new Buffer(stdout);

	});

}
