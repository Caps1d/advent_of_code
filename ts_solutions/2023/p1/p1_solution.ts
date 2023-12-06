import * as fs from "fs";

export function solveDayOne() {
  const values = fs.readFileSync("./input.txt", "utf-8").split("\n");
  const digits = {
    one: "1",
    two: "2",
    three: "3",
    four: "4",
    five: "5",
    six: "6",
    seven: "7",
    eight: "8",
    nine: "9",
  };

  let acc = 0;
  values.forEach((value: string) => {
    let nums = "";
    for (let i = 0; i < value.length; i++) {
      const substr = value.slice(i);
      for (const [key, val] of Object.entries(digits)) {
        if (substr.startsWith(key) || substr.startsWith(val)) {
          nums += val;
        }
      }
      if (nums.length == 1) {
        break;
      }
    }
    for (let i = value.length; i >= 0; i--) {
      const substr = value.slice(0, i);
      for (const [key, val] of Object.entries(digits)) {
        if (substr.endsWith(key) || substr.endsWith(val)) {
          nums += val;
        }
      }
      if (nums.length == 2) {
        break;
      }
    }
    acc += Number(nums);
  });
  return acc;
}
