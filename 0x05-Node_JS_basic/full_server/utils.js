const fs = require('fs').promises;

async function readDatabase(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf-8');
    const students = [];
    const lines = data.trim().split('\n');
    for (const line of lines) {
      if (line) {
        students.push(line.split(','));
      }
    }

    const fields = {};
    for (const student of students) {
      const fieldName = student[0];
      const firstName = student[1];
      if (!fields[fieldName]) {
        fields[fieldName] = [];
      }
      fields[fieldName].push(firstName);
    }
    return fields;
  } catch (error) {
    return Promise.reject(error);
  }
}

module.exports = { readDatabase };
