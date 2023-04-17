const names = document.querySelector('.name');
const form = document.getElementById('form');
const date = document.getElementById('date');
const period = document.getElementById('period');
const cycle = document.getElementById('cycleDays');
const button = document.getElementById('button');
const periods = document.querySelector('.start');
const ovulation = document.querySelector('.fertile');
//Assiging name
names.textContent = prompt('please ennter your name');

form.addEventListener('submit', (e) => {
	e.preventDefault();
	//Setting Values
	const dateVal = date.value;
	const periodVal = period.value;
	const cycleVal = cycle.value;

	//Valdation
	if (dateVal == '' || cycleVal == '' || periodVal == '') {
		alert('Please Fill in the appropriate fields!');
		return;
	}

	//Date Arrays
	const arr1 = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
	const arr2 = [
		'Jan',
		'Feb',
		'Mar',
		'April',
		'May',
		'Jun',
		'Jul',
		'Aug',
		'Sept',
		'Oct',
		'Nov',
		'Dec',
	];

	//Period Start Date
	const nextPeriod = new Date(dateVal);
	const startDay = nextPeriod.setDate(
		nextPeriod.getDate() + parseInt(cycleVal)
	);
	const starts = new Date(startDay);
	const day1 = arr1[starts.getDay()];
	const month1 = arr2[starts.getMonth()];
	const day2 = starts.getDate();
	const year1 = starts.getFullYear();
	const perStFull = `${day1}-${month1}-${day2}-${year1}`;

	//Period End Date
	const lastPeriod = starts.setDate(starts.getDate() + parseInt(periodVal) - 1);
	const ends = new Date(lastPeriod);
	const day3 = arr1[ends.getDay()];
	const month2 = arr2[ends.getMonth()];
	const day4 = ends.getDate();
	const year2 = ends.getFullYear();
	const perEdFull = `${day3}-${month2}-${day4}-${year2}`;

	periods.textContent = `${perStFull} till ${perEdFull}.`;

	//Fertile Window Start Date
	const fertile = ends.setDate(ends.getDate() + 7);
	const fertileStart = new Date(fertile);
	const day5 = arr1[fertileStart.getDay()];
	const month3 = arr2[fertileStart.getMonth()];
	const day6 = fertileStart.getDate();
	const year3 = fertileStart.getFullYear();
	const frtlStFll = `${day5}-${month3}-${day6}-${year3}`;

	//Fertile Window end date
	const fertileEnd = fertileStart.setDate(fertileStart.getDate() + 5);
	const ovlation = new Date(fertileEnd);
	const day7 = arr1[ovlation.getDay()];
	const month4 = arr2[ovlation.getMonth()];
	const day8 = ovlation.getDate();
	const year4 = ovlation.getFullYear();
	const frtlEnFll = `${day7}-${month4}-${day8}-${year4}`;

	ovulation.textContent = `${frtlStFll} till ${frtlEnFll}`;
});
