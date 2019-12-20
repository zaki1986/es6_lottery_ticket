//服务器脚本
import gulp from 'gulp';
import gulpif from 'gulp-if';
import liveserver from 'gulp-live-server';  //引入一个启动服务器的包
import args from './util/args';

gulp.task('serve',(cb)=>{  //cb是一个回调，serve是任务名 
	if(!args.watch) return cb();  //如果不是处于监听状态下，直接返回回调函数

	//如果处于监听状态下，就创建一个服务器
	var server = liveserver.new(['--harmony','server/bin/www']);
	/*	'--harmony'  在当前命令行下去执行这个harmony脚本
		'server/bin/www'  //最终启动的服务器脚本（？）*/

	server.start();  //启动服务器

	//监听server这个命令下的所有js，ejs的模板引擎（当发生改变时浏览器自动刷新，实现热更新）
	gulp.watch(['server/public/**/*.js','server/views/**/*.ejs'],function(file){
		server.notify.apply(server,[file]); //通知服务器，文件已发生改变，然后做相应的处理
	})
	//gulp.watch  //对文件的监听
	//第一个参数，是传入的一个数组，值的要监听的哪些路径
	//监听完之后，将改动告诉给服务器，然后做出相应的动作

	// 监听需要重启服务的文件
	gulp.watch(['server/routes/**/*.js','server/app.js'],function(){
		server.start.bind(server)()  //监听到变化后，让服务重启
	});
	//'server/routes/**/*.js' 一些服务器的脚本文件，做接口用的
	//'server/app.js' 整个服务的启动入口文件
	//这两个如果发生改变，都要重新启动服务器才能生效
})