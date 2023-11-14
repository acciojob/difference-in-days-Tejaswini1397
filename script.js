var dateDiffInDays = function (date1, date2) {
  //   write your code here
 const timeDiff = Math.abs(date2.getTime() - date1.getTime());

  // Calculate the number of days
  const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));

  return daysDiff;
	
	
};

// Do not change the code below.
const dateOne = prompt("Enter Start Date.");
const dateTwo = prompt("Enter End Date.");
// alert(dateDiffInDays(dateOne, dateTwo));
