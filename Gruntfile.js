module.exports = function(grunt) {
	
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		less: {
			files: {
				"css/style.css": "less/style.less"
			}
		}
		//Add the Tasks configurations here.
	});
	// Define Tasks here
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-autoprefixer');
	
};