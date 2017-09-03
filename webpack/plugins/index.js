const webpack = require('webpack');

const progressPlugin = new webpack.ProgressPlugin((percentage, msg) => {
	if (percentage === 0) {
		console.log('\n\n[ webpack starting ]\n\n\n');
	} else if (percentage === 1) {
		setTimeout(() => {
			console.log('\n\n\n[ webpack finished ]\n\n\n');
		}), 100;
	}
});

module.exports = [
	progressPlugin
];
