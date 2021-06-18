package main

import (
	"errors"
	"fmt"
	"os"
	"path/filepath"
	"strings"

	"github.com/tealeg/xlsx"
	"github.com/urfave/cli"
)

func main() {
	app := cli.NewApp()
	app.Name = "xlsx2psv"
	app.Version = "v2"
	app.Usage = "Tiny one way file conversion tooling"
	app.UsageText = "Example Usage: xlsx2psv -i <file.xlsx> -o <file.csv>"

	var inputf, outputf, delim string
	app.Flags = []cli.Flag{
		cli.StringFlag{
			Name:        "input, i",
			Usage:       "input <file.xlsx>",
			Destination: &inputf,
		},
		cli.StringFlag{
			Name:        "output, o",
			Usage:       "output <file.csv>",
			Value:       "output.csv",
			Destination: &outputf,
		},
		cli.StringFlag{
			Name:        "delimiter, d",
			Usage:       "custom delimiter char [any string]",
			Value:       "|",
			Destination: &delim,
		},
	}

	app.Action = func(ctx *cli.Context) error {
		if inputf != "" && outputf != "" {
			if _, err := os.Stat(inputf); os.IsNotExist(err) {
				fmt.Fprintf(os.Stderr, "file does not exist %v \n", err)
				return err
			}

			if filepath.Ext(strings.TrimSpace(outputf)) != ".csv" {
				return errors.New("should be a valid .csv file")
			}
			if filepath.Ext(strings.TrimSpace(inputf)) != ".xlsx" {
				return errors.New("should be a valid .xlsx file")
			}

			err := handleExcel(inputf, outputf, delim)
			if err != nil {
				fmt.Fprintf(os.Stderr, "could not read excel %v \n", err)
			}
			return nil
		}

		fmt.Println(app.UsageText)
		return nil
	}

	err := app.Run(os.Args)
	if err != nil {
		fmt.Fprintf(os.Stderr, "could not start cli %v \n", err)
	}
}

// handleExcel handles the data extraction from a given xlsx file as input and saves the data as a valid csv/psv data based
// on the delimiter
func handleExcel(inputf, outputf, delim string) error {
	reader, err := xlsx.OpenFile(inputf)
	sheetLen := len(reader.Sheets)

	if sheetLen == 0 {
		return fmt.Errorf("%d, available", sheetLen)
	}

	values := []string{}
	sheet := reader.Sheets[0]
	for _, row := range sheet.Rows {
		if row != nil {
			for _, cell := range row.Cells {
				str, _ := cell.FormattedValue()
				str = strings.TrimSpace(str)
				str = strings.TrimSuffix(str, "\n")
				values = append(values, str)
			}
		}
	}

	f, err := os.Create(outputf)
	if err != nil {
		fmt.Fprintf(os.Stderr, "could not create file %v %v \n", f, err)
	}
	defer f.Close()

	for item, d := range values {
		last := len(values) - 1
		if item != last {
			if item != 0 && item%2 != 0 {
				d = delim + d + "\n"
			}
		} else {
			d = delim + d
		}
		// INFO: write data in a hacky way using the Fprintf function with a file descriptor, this should normally use ioutil.WriteAll or stuff
		fmt.Fprintf(f, d)
	}

	fmt.Printf("Done! Written: %d bytes \n", len(values))
	fmt.Println("Saved it to => cat", outputf)
	return err
}
