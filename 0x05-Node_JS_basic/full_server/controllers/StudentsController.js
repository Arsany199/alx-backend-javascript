class StudentsController {
  static getAllStudents(request, response) {
    const path = process.argv.length > 2 ? process.argv[2] : '';
    
    readDatabase(path)
      .then((studentGroups) => {
        const responseParts = ['This is the list of our students'];
      });
  }
}
