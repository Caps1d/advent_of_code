import * as fs from "fs";

export function solveDayThree() {
  const file = fs.readFileSync("./d3_input.txt", "utf8").split("\n");
  console.log(file);

  let total = 0;
  // this loop selects rows
  for (let i = 0; i < file.length; i++) {
    let upper_i = i - 1 > 0 ? i - 1 : i;
    let lower_i = i + 1 < file.length ? i + 1 : i;

    let upper_line = file[upper_i].split("");
    let current_line = file[i].split("");
    let lower_line = file[lower_i].split("");

    console.log(current_line);

    let number = "";
    let numCheck = false;
    // this loop is meant to go through each line with sliding windows
    for (let j = 0; j < current_line.length; j++) {
      if (!isNaN(Number(current_line[j]))) {
        // i want to check now whether there are any characters asides from digits around current_line in a 3x3 grid
        // so 3 indexes at the top (if possible), 1 index left and right of the current element and 3 below (again, if possible)
        // // how can I do this?
        let left_j = j == 0 ? j : j - 1;
        let right_j = j == file[i].length - 1 ? j : j + 1;

        let upper_left = upper_line[left_j];
        let upper_mid = upper_line[j];
        let upper_right = upper_line[right_j];

        let current_left = current_line[left_j];
        let current_right = current_line[right_j];

        let lower_left = lower_line[left_j];
        let lower_mid = lower_line[j];
        let lower_right = lower_line[right_j];

        let grid: string[] = [
          upper_left,
          upper_mid,
          upper_right,
          current_left,
          current_right,
          lower_left,
          lower_mid,
          lower_right,
        ];

        let containsNonDigit = grid.some(
          (element) => isNaN(Number(element)) && element !== "."
        );
        if (containsNonDigit) {
          numCheck = true;
        }
        number += current_line[j];
      }
      if (isNaN(Number(current_line[j])) && number.length != 0) {
        if (numCheck == true) {
          total += Number(number);
          // console.log(`total: ${total}, number: ${number}`);
          numCheck = false;
        }
        number = "";
      }
    }
  }
  return total;
}
