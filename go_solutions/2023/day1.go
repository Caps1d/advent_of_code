package main

import (
	"strconv"
	"strings"
)

func solveDayOne(content string) int64 {
	values := strings.Split(content, "\n")

	digits := map[string]string{
		"one":   "1",
		"two":   "2",
		"three": "3",
		"four":  "4",
		"five":  "5",
		"six":   "6",
		"seven": "7",
		"eight": "8",
		"nine":  "9",
	}

	acc := int64(0)

	for _, value := range values {
		num := ""

		for i := 0; i < len(value); i++ {
			substr := value[i:]

			for k, v := range digits {
				if strings.HasPrefix(substr, k) || strings.HasPrefix(substr, v) {
					num += v
					break
				}
			}

			if len(num) == 1 {
				break
			}
		}

		for i := len(value); i >= 0; i-- {
			substr := value[:i]

			for k, v := range digits {
				if strings.HasSuffix(substr, k) || strings.HasSuffix(substr, v) {
					num += v
					break
				}
			}

			if len(num) == 2 {
				break
			}
		}

		n, err := strconv.ParseInt(num, 10, 64)

		if err == nil {
			acc += n
		}
	}
	return acc
}
