var gulp = require('gulp'),
	fs = require('fs'),
	concat = require('gulp-concat'),
	clean = require('gulp-clean'),
	// Some variables
	dir_cache = 'cache/',
	dir_source_css = 'css/',
	dir_source_js = 'js/';


// Cleanup and watch tasks

	gulp.task('default', ['clean'], function(){
		gulp.start('css-default','js-default');
	});

	gulp.task('clean', function() {
		return gulp.src(dir_cache+'*', {read: false})
			.pipe(clean());
	});

	gulp.task('watch', function() {
		gulp.watch(dir_source_css+'/*.css', ['css-default']);
		gulp.watch(dir_source_js+'/*.js', ['js-default']);
	});

// CSS generation

	gulp.task('css-default', function() {
		return concatAndOutput(
			'strayegg.css',
			scanDir(
				dir_source_css,
				'css',
				[],
				[],
				[]
			)
		);
	});

// JS generation

	gulp.task('js-default', function() {
		return concatAndOutput(
			'strayegg.js',
			scanDir(
				dir_source_js,
				'js',
				[],
				[],
				[]
			)
		);
	});

// Helper methods

	function concatAndOutput(target,source) {
		return gulp.src(source)
			.pipe(concat(target))
			.pipe(gulp.dest(dir_cache));
	}

	function scanDir(dirToScan,fileExtension,prefixFiles,suffixFiles,ignoreFiles) {

		var arrIgnore = ignoreFiles.concat(prefixFiles).concat(suffixFiles);
		var arrIncludes = prefixFiles;

		fs.readdirSync(dirToScan).forEach(function(file) {
			if (file.substr(file.length-(fileExtension.length+1)) == '.'+fileExtension && arrIgnore.indexOf(file) < 0) {
				arrIncludes.push(file);
			}
		});

		var arrFinal = [];
		arrIncludes.concat(suffixFiles).forEach(function(file){ 
			arrFinal.push(dirToScan+file);
		});

		return arrFinal;
	}