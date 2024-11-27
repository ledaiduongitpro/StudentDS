function splitList() {
  const studentList = document
    .getElementById("studentList")
    .value.trim()
    .split("\n")
    .filter(Boolean);
  const shuffledList = studentList.sort(() => 0.5 - Math.random());
  const class1 = [];
  const class2 = [];

  shuffledList.forEach((student, index) => {
    if (index % 2 === 0) {
      class1.push(student);
    } else {
      class2.push(student);
    }
  });

  document.getElementById("class1").textContent = class1.sort().join("\n");
  document.getElementById("class2").textContent = class2.sort().join("\n");
}
