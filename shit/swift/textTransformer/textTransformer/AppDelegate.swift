//
//  AppDelegate.swift
//  textTransformer
//
//  Created by Lukas Jocham on 30.09.19.
//  Copyright © 2019 Lukas Jocham. All rights reserved.
//

import Cocoa

@NSApplicationMain
class AppDelegate: NSObject, NSApplicationDelegate {

    //Automatially set status icon and size
    let statusItem = NSStatusBar.system.statusItem(withLength: NSStatusItem.variableLength)
    let statusItemValue = "🤯"

    func applicationDidFinishLaunching(_ aNotification: Notification) {
        statusItem.button?.title = statusItemValue
        statusItem.button?.target = self
        statusItem.button?.action = #selector(showSettings)
    }

    func applicationWillTerminate(_ aNotification: Notification) {
        // Insert code here to tear down your application
    
    }

    @objc func showSettings() {
        let sb = NSStoryboard( name: "Main", bundle: nil )

        guard let controller = sb.instantiateController(withIdentifier: "ViewController") as?
            ViewController else {
            fatalError("Unable to find ViewController in the storyboard.")
        }

        guard let button  = statusItem.button else {
            fatalError("Could not find status item button.")
        }

        let popoverView = NSPopover()
        popoverView.contentViewController = controller
        popoverView.behavior = .transient
        popoverView.show(relativeTo: button.bounds, of: button, preferredEdge: .maxY)
    }
}
