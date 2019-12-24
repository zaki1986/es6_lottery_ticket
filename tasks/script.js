/*
	处理js的构建脚本
	所有的构建脚本一定是放在tasks目录下的
*/
//引入这个脚本所依赖的包
import gulp from 'gulp';//整个项目的构建都是基于gulp的基础上的
import gulpif from 'gulp-if';//gulp语句中做if判断的
import concat from 'gulp-concat';//gulp中处理文件拼接的
import webpack from 'webpack';//引入webpack工具包
import gulpWebpack from 'webpack-stream';/*gulp处理的都是些文件流，它是基于stream的，
											所以引入webpack-stream包结合它来做处理*/
import named from 'vinyl-named';//对文件重命名做标志的
import livereload from 'gulp-livereload'; //热更新包，实现文件修改以后浏览器自动刷新等
import plumber from 'gulp-plumber'; // 处理文件信息流的，防止来自 gulp 插件错误导致中断操作的插件 
import rename from 'gulp-rename'; // 文件重命名 
import uglify from 'gulp-uglify'; // 用来处理js，css压缩的包 
import {log,colors} from 'gulp-util'; //在命令行工具输出的包
import args from './util/args';//对命令行参数进行解析的一个包（开始自己写的那个）

//创建脚本编译的任务 
//task、src等是gulp提供的一个标准的API，创建一个任务
//这里的scripts是 任务的名称
//ES6的箭头函数
gulp.task('scripts',()=>{
	return gulp.src(['app/js/index.js']) //打开这个文件
		.pipe(plumber({           //处理常规的错误逻辑
			errorHandle:function(){

			}
		}))
		.pipe(named())  //对文件重新命名

		.pipe(gulpWebpack({  /*对文件进行编译，3个参数，第一个参数是编译相应的文件，
													第二个是null，第三个是对错误进行一个处理*/
			module:{
				rules:[{
					test:/\.js$/,  //如果遇到.js文件，用babel这个loader去处理
					loader:'babel-loader'//这里还需要装三个依赖包，babel-loader、babel-core、babel-preset-env
				}]
			}
		}),null,(err,stats)=>{
			log(`Finished '${colors.cyan('scripts')}'`,stats.toString({
				chunks:false
			}))
		})

		//设置文件编译完后放在哪个地方
		.pipe(gulp.dest('server/public/js'))  //使用gulp.dest这个命令以后，将编译好的文件写入这个路径中
		//为什么要写在server目录下，是因为在server中要拿到最新的（就是编译好的）js才能在整个服务器中跑起来

		//处理编译压缩的过程（三步：复制-压缩-存储）
		.pipe(rename({  //可以理解成把上面生成的文件重新复制了一份
			basename:'cp',
			extname:'.min.js'
		}))
		//压缩
		.pipe(uglify({compress:{properties:false},output:{'quote_keys':true}}))
		//存储到这个文件夹下
		.pipe(gulp.dest('server/public/js'))

		/*截止现在，在server/public/js这个路径下会有两个文件，
		一个是编译好了未压缩的，一个是编译好的压缩了的（文件名：cp.min.js）*/

		//监听一个文件，当这个文件变化了之后自动刷新
		.pipe(gulpif(args.watch,livereload()))  
		/*解释上面：判断args.watch这个参数，如果命令行中有watch这个选项的话，
			就执行这个livereload()热更新，如果没有，就不会对文件进行监听，也不会刷新*/

		// 注：这里的 watch 只是监听命令参数的 watch，并不是监听文件的变化。
})