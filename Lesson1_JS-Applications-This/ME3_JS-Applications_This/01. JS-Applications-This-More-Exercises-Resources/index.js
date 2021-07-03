function solve() {
  const tableRowArr = document.querySelectorAll("tbody tr");

  tableRowArr.forEach((tableRow) =>
    tableRow.addEventListener("click", changeBackground)
  );

  function changeBackground() {
    tableRowArr.forEach((tableRow) => {
      tableRow.removeAttribute("style");      
   });

   this.style.backgroundColor !== ""
     ? this.removeAttribute("style")
     : (this.style.backgroundColor = "#413f5e");
  }
}
