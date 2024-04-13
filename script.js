/** @format */

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    //Write your code here , just console.log
    arr.map (PrintDeveloperbyMap) = console.log (arr.profession);
  }
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log

    arr.forEach(profession) = console.log(profession);

  }
  function addData() {
    //Write your code here, just console.log
    arr.push ({id:4,name:"susan",age:"20",profession:"intern"}) ;
        console.log (arr);
    
  }
  function removeAdmin() {
    //Write your code here, just console.log

    arr.pop(profession, "admin") = console.log(arr);  

  }
  
  function concatenateArray() {
    //Write your code here, just console.log

    let arrNew = [
        { id: 4, name: "om", age: "25", profession: "developer" },
        { id: 5, name: "back", age: "50", profession: "developer" },
        { id: 6, name: "raman", age: "39", profession: "admin" },
      ];

      let newObj = (...arr, ...arrNew);
      console.log(newObj);
  }