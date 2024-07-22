const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.trim().split('\n');
    const students = {};

    for (const l in lines) {
      if (l !== null) {
         const [firstName, field] = l.split(',');
	 students[field] = students[field] || { count: 0, list: [] };
     	 students[field].count++;
         students[field].list.push(firstName);
      }
    }

    console.log(`Number of students: ${Object.keys(students).length}`);
    for (const field in students) {
      const { count, list } = students[field];
      console.log(`Number of students in ${field}: ${count}. List: ${list.join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}
module.export = countStudents;
