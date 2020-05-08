const fs = require('fs');

exports.stringLowerCase = (string) => {
  return string.trim().toLowerCase();
};

exports.generateId = () => {
  return new Date().valueOf();
};

exports.loadDb = (jsonFile) => {
	const jsonstring = fs.readFileSync(jsonFile);
	const json = JSON.parse(jsonstring);
	return json;
};

exports.saveToDb = (jsonFile, jsObj) => {
	fs.writeFileSync(jsonFile, JSON.stringify(jsObj), (error) => {
		if (error) {
			console.log(error);
			return;
		}
	});
	console.log('Saved to disk');	
};

exports.helpText = `
Here's a list of commands you can use!

help                Opens this dialog.
quit                Quits the program.

Account actions
create_account      Opens a dialog for creating an account.
close_account       Opens a dialog for closing an account.
change_name         Opens a dialog for changing the name associated with an account.
does_account_exist  Opens a dialog for checking if an account exists.
account_balance     Opens a dialog for logging in and prints the account balance.

Fund actions
withdraw_funds      Opens a dialog for withdrawing funds.
deposit_funds       Opens a dialog for depositing funds.
transfer_funds      Opens a dialog for transferring funds to another account.

Fund requests
request_funds       Opens a dialog for requesting another user for funds.
fund_requests       Shows all the fund requests for the given account.
accept_fund_request Opens a dialog for accepting a fund request.`;

