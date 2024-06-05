interface std {
    firstName: string,
    lastName: string,
    age: number,
    location: string
}

function creatstd(std: Student) {
    return {
        firstName: std.firstName,
	lastName: std.lastName,
	age: std.age,
	location: std.location
    }
}

const std1 = creatstd({ firstName: 'arsany', lastName: 'kamal', age: 23, location: 'alexandria' });
const std2 = creatstd({ firstName: 'soso', lastName: 'lolo', age: 12, location: 'cairo' });

const studentsList = [ std1, std2 ];

function renderTable(std: Student) {
  const tableBody = document.getElementById("student-table-body") as HTMLTableBodyElement;
  const newRow = document.createElement("tr");

  const firstNameCell = document.createElement("td");
  firstNameCell.textContent = std.firstName;

  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;

  newRow.appendChild(firstNameCell);
  newRow.appendChild(locationCell);

  tableBody.appendChild(newRow);
}

studentsList.forEach(renderTable);
