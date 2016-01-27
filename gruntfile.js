module.exports = function(grunt){

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		serve: {
		options: {
			port: 9999
			}
		},

		uglify: {
			options: {
				manage: false
			},
			my_target: {
				files: {
					'scripts/main.min.js': ['scripts/barcharts.js']
				}
			}
		},

		cssmin: {
			options: {
				manage: false
			},
			my_target: {
				files: {
					'css/style.min.css': ['css/style.css']
				}
			}
		}
	});


	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-serve');
};