function countDown(number) {
  if (number <= 0) {
    console.log("finished");
    return;
  }
  console.log(number);
  number--;
  countDown(number);
}

countDown(5);