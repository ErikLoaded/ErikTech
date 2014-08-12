
/*global module:false*/
module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({

		jekyll: {
			server : {
				src : './',
				dest: 'dev',
				server : true,
				server_port : 4000,
				auto : true
			},
			dev: {
				src: './',
				dest: 'dev'
			},
			prod: {
				src: 'templates',
				dest: 'prod'
			}
		},

		watch: { // for development run 'grunt watch'
			jekyll: {
				files: ['*/*.html','*/*.markdown'],
				tasks: ['jekyll:dev']
			},
			scss: {
				files: ['css/main.scss'],
				tasks: ['sass:dev'],
				options: {
      		livereload: true,
    		}
			}

		},
		sass: {                              // Task
    	dev: {                            // Target
      	options: {                       // Target options
        	style: 'expanded'
      	},
      	files: {                         // Dictionary of files
        	'_site/css/main.css': 'css/main.scss'
	      }
	    }
	  }
	});

	// Default task. Run standard jekyll server.
	grunt.registerTask('default', 'jekyll:server');

	// plugin tasks
	grunt.loadNpmTasks('grunt-jekyll');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');
};
