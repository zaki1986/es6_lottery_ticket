//app这个目录，是作为前端资源的原始文件的目录
//server.js自动更新的时候，处理的是server/public下的文件

import gulp from 'gulp';
import gulpif from 'gulp-if';
import gutil from 'gulp-util';
import args from './util/args';

gulp.task('browser',(cb)=>{
	if(!args.watch) return cb();  //如果没有监听，返回回调

	//监听app里js变化时调用scripts构建脚本（scripts.js），完成后es6转成es5或3,写到server目录下的文件里
	gulp.watch('app/**/*.js',['scripts']);
	//同理，监听app目录下的模板文件变化
	gulp.watch('app/**/*.ejs',['pages']);
	//同理，监听css
	gulp.watch('app/**/*.css',['css']);
});