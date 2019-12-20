//清空指定目录下的文件
//app里的原文件是ES6的，但在server中（浏览器中）去运行，它就转换成ES5或ES3了，在这里，编译完后会有一个拷贝的过程，每次改变原文件，都会拷贝并去覆盖server里面的文件，为了安全起见，先清空目录，在拷贝进去
import gulp from 'gulp';
import del from 'del';//引入做删除动作的包
import args from './util/args';

gulp.task('clean',()=>{
	return del(['server/public','server/views'])//清空这两个目录，这样每次重新拷贝过来就不会出现覆盖现象
})