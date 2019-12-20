//作用：将所有的任务都关联起来
import gulp from 'gulp';
import gulpSequence from 'gulp-sequence';//处理包之间的顺序问题

gulp.task('build',gulpSequence('clean','css','pages','scripts',['browser','serve']));
//先是clean，清除server两个相关的目录（见clean.js），一定是放在最前面的
//紧着着，将css拷过去（css），编译模板（pages），执行脚本（scripts）
//['browser','serve'] 理解：这个数组一定是在最后的，而在数组里，browser一定是在serve前面的，serve一定是在最后面执行