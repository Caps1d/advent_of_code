import * as fs from "fs";

const values = fs.readFileSync("./input.txt", "utf-8").split("\n");

//The idea is to use a 2 pointer approach
values.forEach((value) => {
  let i = 0;
  let j = value.length - 1;
  let val = value.split("");
  console.log(val, j);
  while (i <= j && j > i) {
    if (value[i].isdigit(){

    })
  }
});
