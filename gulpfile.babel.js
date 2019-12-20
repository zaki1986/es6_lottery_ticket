//将所有的文件加载进来，运行，这里需要用到require-dir这个包 
import requireDir from 'require-dir';

requireDir('./tasks');//将tasks这个目录加载进来运行（所有的构建脚本都是放在tasks目录下的）