module.exports = {
	apps: [
		{
			name: 'my-srr',// 项目名称
			cwd: './',// 当前工作路径
			script: 'npm',// 实际启动脚本
			args: 'run start',// 参数
			autorestart: true, // 自动重启
			error_file: 'logs/my-srr-err.log',// 错误日志
			out_file: 'logs/my-srrnpm-out.log', // 正常运行日志
			exec_mode: 'cluster',// 应用启动模式，支持fork和cluster模式
			min_uptime: '60s', // 应用运行少于时间被认为是异常启动
			restart_delay: '60',// 重启时延
			instances: 2,// 开启4个实例，仅在cluster模式有效，用于负载均衡
			watch: ['.nuxt', 'nuxt.config.js'],// 监控变化的目录
			watch_delay: 1000,// 监控时延
			ignore_watch: ['node_modules'],// 从监控目录中排除
			watch_options: { // 监听配置
				'followSymlinks': false,
				'usePolling': true
			}
		}
	]
}
