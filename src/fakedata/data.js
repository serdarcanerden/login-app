export const Data = [
	{
		ID: 1,
		FirstName: 'John',
		LastName: 'Heart',
		Date: '2020/03/16',
		field1: '1st field',
		field2: '2nd field',
		Notes:
			'John has been in the Audio/Video industry since 1990. He has led DevAv as its CEO since 2003.\r\n\r\nWhen not working hard as the CEO, John loves to golf and bowl. He once bowled a perfect game of 300.',
	},
	{
		ID: 20,
		FirstName: 'Olivia',
		LastName: 'Peyton',
		Date: '2020/06/03',
		field1: '1st field',
		field2: '2nd field',
		Notes:
			'Olivia loves to sell. She has been selling DevAV products since 2012. \r\n\r\nOlivia was homecoming queen in high school. She is expecting her first child in 6 months. Good Luck Olivia.',
	},
	{
		ID: 4,
		FirstName: 'Robert',
		LastName: 'Reagan',
		Date: '2020/09/07',
		field1: '1st field',
		field2: '2nd field',
		Notes:
			'Robert was recently voted the CMO of the year by CMO Magazine. He is a proud member of the DevAV Management Team.\r\n\r\nRobert is a championship BBQ chef, so when you get the chance ask him for his secret recipe.',
	},
	{
		ID: 5,
		FirstName: 'Greta',
		LastName: 'Sims',
		Date: '2020/11/22',
		field1: '1st field',
		field2: '2nd field',
		Notes:
			"Greta has been DevAV's HR Manager since 2003. She joined DevAV from Sonee Corp.\r\n\r\nGreta is currently training for the NYC marathon. Her best marathon time is 4 hours. Go Greta.",
	},
	{
		ID: 6,
		FirstName: 'Brett',
		LastName: 'Wade',
		Date: '2020/12/01',
		field1: '1s field',
		field2: '2nd field',
		Notes:
			'Brett came to DevAv from Microsoft and has led our IT department since 2012.\r\n\r\nWhen he is not working hard for DevAV, he coaches Little League (he was a high school pitcher).',
	},
];

// eslint-disable-next-line no-unused-vars
function addData(firstname, lastname, date, f1, f2, notes) {
	console.log(firstname);
	console.log(lastname);
	console.log(date);
	console.log(f1);
	console.log(f2);
	console.log(notes);

	Data.push({
		ID: Data.length + 2,
		FirstName: firstname,
		LastName: lastname,
		Date: date,
		field1: f1,
		field2: f2,
		Notes: notes,
	});
}

export { addData };
