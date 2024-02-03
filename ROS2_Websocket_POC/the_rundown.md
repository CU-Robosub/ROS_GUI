# The rundown

`npm install roslib` gets the js library for ros websockets

`sudo apt-get install ros-humble-bridge-suite` gets the rospackage for ros websockets

launch webserver for ros data: `ros2 launch rosbridge_server rosbridge_websocket_launch.xml`

launch webserver for webapp: `python3 -m http.server 8080`

Sequential scripts to run demo node in the html file
```
    <script type="text/javascript" src="node_modules/roslib/build/roslib.min.js"></script>
    <script type="text/javascript" src="ros_demo.js"></script>
```

