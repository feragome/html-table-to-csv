function tableToCSV(document) {

	// Variable to store the final csv data
	const csv_data = [];

	// Get each row data
	const rows = document.getElementsByTagName('tr');
	for (let i = 0; i < rows.length; i++) {

		// Get each column data
		const cols = rows[i].querySelectorAll('td,th');

		// Stores each csv row data
		const csvrow = [];
		for (let j = 0; j < cols.length; j++) {

			// Get the text data of each cell of
			// a row and push it to csvrow
			csvrow.push(cols[j].innerHTML);
		}

		// Combine each column value with comma
		csv_data.push(csvrow.join(",").replace(/(\r\n|\n|\r|  )/gm, ""));
	}

	// combine each row data with new line character
    return csv_data.join('\n');
}


module.exports = tableToCSV;