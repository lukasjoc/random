package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"os"
	"time"
)

var (
	NUMREC_DATA_FILE = "data.json"
	NUMREC_DATA_ROOT = fmt.Sprintf("%s%s", os.Getenv("HOME"), "/.local/share/numrec/")
	NUMREC_DATA_PATH = fmt.Sprintf("%s%s", NUMREC_DATA_ROOT, NUMREC_DATA_FILE)
)

// Result holds the player results data
type Result struct {
	Timestamp string `json:"timestamp"`
	Level     int    `json:"level"`
}

// Results holds an slice of results
type Results struct {
	Results []Result `json:"results"`
}

// writer writes any row like json data to a specific path with read,write permissions
func (results *Results) write() error {

	if _, err := os.Stat(NUMREC_DATA_ROOT); os.IsNotExist(err) {
		if err := os.MkdirAll(NUMREC_DATA_ROOT, os.ModePerm); err != nil {
			log.Fatalf("could not create directory %s: %v\n", NUMREC_DATA_ROOT, err)
			return err
		}
	}

	f, _ := os.Create(NUMREC_DATA_PATH)
	defer f.Close()

	bytes, err := json.MarshalIndent(results, "", "\t")
	if _, err = f.Write(bytes); err != nil {
		return err
	}
	return err
}

// reader reads from any row like input data from a specific path
func (results *Results) read() (*Results, error) {
	stream, err := ioutil.ReadFile(NUMREC_DATA_PATH)
	if err != nil {
		log.Fatalf("could not read json file: %v", err)
		return results, err
	}
	json.Unmarshal(stream, results)
	return results, err
}

// add data to a list of a specific struct child
func (results *Results) add(result Result) []Result {
	results.Results = append(results.Results, result)
	return results.Results
}

// timestamp returns an RFC timestamp
func timestamp() string {
	return time.Now().Format(time.RFC3339)
}

// PersistAsJSON the data to a JSON file
func PersistAsJSON(level int) {

	var result Result
	var results Results

	result = Result{
		Timestamp: timestamp(),
		Level:     level,
	}

	if _, err := os.Stat(NUMREC_DATA_PATH); os.IsNotExist(err) {
		fmt.Println(result)
		results.add(result)
		results.write()
		return
	}

	currentResults, err := results.read()
	if err != nil {
		log.Fatalf("could not read results from path:  %v \n", NUMREC_DATA_PATH)
	}

	// FIXME: THIS READS and WRITES ALL OF THE DATA BACK AND FORTH.
	// Inefficient as hell
	currentResults.add(result)
	currentResults.write()

	return
}
