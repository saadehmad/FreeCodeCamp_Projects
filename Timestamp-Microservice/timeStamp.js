"use strict"

module.exports = {
	months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
	getTimeStamp: function(dayOrTime) {
		if (dayOrTime == null) {
			return "Noting is Define";
		}
		let timeToConvert = dayOrTime;
		if(typeof timeToConvert === 'string') {
			return {
						"unix": new Date(timeToConvert).getTime(),
						"natural": timeToConvert
					};
		} else {
			const date = new Date(timeToConvert);
			let month = date.getMonth(); month = this.months[month];
			let day = date.getDate();
			let year = date.getFullYear();
			return {
						"unix": timeToConvert,
						"natural": month + " " + day + ", " + year
					};
		}
	}
}