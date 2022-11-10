function myLocalScope() {
    const myVar = "myVar";
    console.log('inside myLocalScope', myVar);
  }
  myLocalScope();
  console.log('outside myLocalScope', myVar);