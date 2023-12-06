package main

import (
	"fmt"
	"os"
)

func main() {
	file, err := os.ReadFile("./input.txt")
	if err != nil {
		panic(err)
	}

	content := string(file)
	result := solveDayOne(content)
	fmt.Println(result)

}
