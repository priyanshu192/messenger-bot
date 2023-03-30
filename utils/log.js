const chalk = require('chalk');
module.exports = (data, option) => {
	switch (option) {
		case "warn":
			console.log(chalk.bold.hex("#FF00FF").bold('[ Error ] » ') + data);
			break;
		case "error":
			console.log(chalk.bold.hex("#FF00FF").bold('[ Error ] »') + data);
     break;
		default:			        
                        console.log(chalk.bold.hex("#FF0000").bold(`${option} » `) + data);
			break;
	}
}

module.exports.loader = (data, option) => {
	switch (option) {
		case "warn":
			console.log(chalk.bold.hex("#ff334b").bold('[ Priyansh ] » ') + data);
			break;
		case "error":
			console.log(chalk.bold.hex("#b4ff33").bold('[ Priyansh ] » ') + data);
			break;
		default:
			console.log(chalk.bold.hex("#33ffc9").bold(`[ Priyansh ] » `) + data);
			break;
	}
	}