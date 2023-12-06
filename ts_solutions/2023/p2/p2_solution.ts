import * as fs from "fs";

export function solveDayTwo() {
  const file = fs.readFileSync("./d2_input.txt", "utf8").split("\n");
  // For part 1
  // let redlim = 12,
  //   greenlim = 13,
  //   bluelim = 14;

  let ans = 0;

  file.forEach((line: string) => {
    if (line.trim() === "") {
      return;
    }

    let cubes: { [key: string]: any } = {
      red: 0,
      green: 0,
      blue: 0,
    };

    let gamedata = line.split(" ");
    gamedata.slice(2).forEach((value: string, index: number) => {
      if (isNaN(Number(value))) {
        value = value.split(/,|;/)[0];
        let num = Number(gamedata[index + 1]);
        if (cubes[value] < num) {
          cubes[value] = num;
        }
      }
    });
    // For part 1
    // if (
    //   cubes["red"] <= redlim &&
    //   cubes["green"] <= greenlim &&
    //   cubes["blue"] <= bluelim
    // ) {
    //   ans += Number(gamedata[1].split(":")[0]);
    // }

    // For part 2
    ans += cubes["red"] * cubes["green"] * cubes["blue"];
  });
  return ans;
}
