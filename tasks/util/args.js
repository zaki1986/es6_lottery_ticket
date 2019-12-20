import yargs from 'yargs'; //引入这个npm包来处理命令行参数
//通过使用 yargs 这个模块来处理命令行的参数，主要是方便处理命令行参数的捕获和过滤

//引入后，定义一些基本的参数
const args = yargs

	//区分线上环境还是开发环境
	//通过option来提取命令行的参数，来区分命令行输入的是否有这个参数，进而来区分它是线上还是开发环境

	.option('production',{
		boolean: true,	//表示是一个Boolean类型
		default: false, /*如果在命令行中没有输入production这个项，那么参数就默认false，
											就是开发环境，有的话则为线上环境*/
		describe: 'min all scripts' //描述  不会被解析
	})

	//设置watch参数，来控制监听开发环境中修改的这些文件要不要自动编译，也通过命令行来控制
	.option('watch',{
		boolean: true,
		default: false,
		describe: 'watch all files' 
	})

	//要不要详细地输出命令行执行的日志
	.option('verbose',{
		boolean: true,
		default: false,
		describe: 'log' 
	})

	//处理压缩的
	.option('sourcemaps',{
		describe: 'force the creation of sroucemaps' 
	})

	//设置服务器端口，来启动服务器
	.option('port',{
		string: true,
		default: 9090,
		describe: 'server port'
	})

	.argv  //表示对输入的命令行的内容以字符串作为解析

	export default args;