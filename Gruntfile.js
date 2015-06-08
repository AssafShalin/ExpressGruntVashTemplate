module.exports = function (grunt) {

	grunt.initConfig({
		watch: {
			files: ['*.js'],
			tasks: ['express']
		},
		
		express: {
			prod: {
				options: {
					script: 'index.js'				}
			}
		}
	});
	grunt.loadNpmTasks('grunt-express-server');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default', 'watch');
};