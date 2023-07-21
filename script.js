console.log("hello");
function beforeSumbit() {
  let leadDate = document.getElementById("Lead_Date__c");
  let dob = document.getElementById("date-of-birth");

  let formttedDate = new Date(dob).toLocaleDateString("en-US");
  leadDate.value = formttedDate;
}
