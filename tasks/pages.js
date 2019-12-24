//处理模板(ejs)的构建脚本
import gulp from 'gulp';
import gulpif from 'gulp-if';
import livereload from 'gulp-livereload'; //热更新
import args from './util/args'; //引入命令行参数那个包

//创建一个任务
gulp.task('pages', () => {
	return gulp.src('app/**/*.ejs') //打开app这个目录下的所有.ejs文件
		.pipe(gulp.dest('server')) //将这些模板文件拷贝到这个server目录下
		.pipe(gulpif(args.watch, livereload())) //监听热更新  注：这里的 watch 只是监听命令参数的 watch，并不是监听文件的变化。
})