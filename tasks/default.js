/*
	在命令行中，如果只输入gulp后面不带任何参数，就会默认去找一个default的任务
*/

import gulp from 'gulp';

gulp.task('default',['build']); 
//注：文件名可以不是default.js，但是，必须要有default这个任务！