# ROS_GUI

An application to interface and manage ROS2 topics via a graphical user interface.

Depends on node.js, bootstrap, and roslib installations.

To start a local version of the webapp, navigate to `Robot_Webapp` and run `npm run dev`. Load the URL displayed in the terminal to view the site.

General development rules:

- Create a component for each feature of the app, and put it in the components folder
- App.tsx and main.tsx should not change. That holds elements that will be displayed in the same way across all of the pages
- Remember to change the websocket URL for roslib elements for testing.

Note: We will change the way you find the ros websocket to be a "global" variable that can be accessed from each ROS component.
