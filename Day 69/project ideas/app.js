#!/usr/bin/gjs

const Gtk = imports.gi.Gtk;
const Gio = imports.gi.Gio;

// Initialize GTK
Gtk.init(null);

// Create a new application
const app = new Gtk.Application({
    application_id: 'org.example.myapp',
    flags: Gio.ApplicationFlags.FLAGS_NONE
});

// When the application is activated (started), create a window
app.connect('activate', () => {
    // Create a new window
    const window = new Gtk.ApplicationWindow({
        application: app,
        title: 'GTK4 App with JavaScript',
        default_height: 300,
        default_width: 400,
    });

    // Create a box to hold the label
    const box = new Gtk.Box({
        orientation: Gtk.Orientation.VERTICAL,
        spacing: 6
    });

    // Create a label and append it to the box
    const label = new Gtk.Label({ label: 'Hello, GTK4!' });
    box.append(label);

    // Set the box as the window's child
    window.set_child(box);

    // Show the window
    window.show();
});

// Run the application
app.run([]);
