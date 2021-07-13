package main

import (
	"fmt"
	"os"
	"path/filepath"
	"time"

	"github.com/go-fsnotify/fsnotify"
)

//
var watcher *fsnotify.Watcher

// main
func main() {

	// creates a new file watcher
	watcher, _ = fsnotify.NewWatcher()
	defer watcher.Close()

	go watchPeriodically("/path/to/directory", 5)

	//
	done := make(chan bool)

	//
	go func() {
		for {
			select {
			// watch for events
			case event := <-watcher.Events:
				fmt.Printf("EVENT! %#v\n", event)

				// watch for errors
			case err := <-watcher.Errors:
				fmt.Println("ERROR", err)
			}
		}
	}()

	<-done
}

// watchDir gets run as a walk func, searching for directories to add watchers to
func watchDir(path string, fi os.FileInfo, err error) error {

	// since fsnotify can watch all the files in a directory, watchers only need
	// to be added to each nested directory
	if fi.Mode().IsDir() {
		return watcher.Add(path)
	}

	return nil
}

// watchPeriodically adds sub directories peridically to watch, with the help
// of fsnotify which maintains a directory map rather than slice.
func watchPeriodically(directory string, interval int) {
	done := make(chan struct{})
	go func() {
		done <- struct{}{}
	}()
	ticker := time.NewTicker(time.Duration(interval) * time.Second)
	defer ticker.Stop()
	for ; ; <-ticker.C {
		<-done
		if err := filepath.Walk(directory, watchDir); err != nil {
			fmt.Println(err)
		}
		go func() {
			done <- struct{}{}
		}()
	}
}
