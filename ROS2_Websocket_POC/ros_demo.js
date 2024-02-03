

console.log("Script started running.");
        // Our JavaScript code will go here
        const ros = new ROSLIB.Ros({ url: "ws://localhost:9090" });

        // When the Rosbridge server connects, fill the span with id "status" with "successful"
        ros.on("connection", () => {
        document.getElementById("status").innerHTML = "successful";
        });

        // When the Rosbridge server experiences an error, fill the "status" span with the returned error
        ros.on("error", (error) => {
        document.getElementById("status").innerHTML = `errored out (${error})`;
        });

        // When the Rosbridge server shuts down, fill the "status" span with "closed"
        ros.on("close", () => {
        document.getElementById("status").innerHTML = "closed";
        });

        const my_topic_listener = new ROSLIB.Topic({
        ros,
        name: "/my_topic",
        messageType: "std_msgs/String",
        });

        // When we receive a message on /my_topic, add its data as a list item to the "messages" ul
        my_topic_listener.subscribe((message) => {
        const ul = document.getElementById("messages");
        const newMessage = document.createElement("li");
        newMessage.appendChild(document.createTextNode(message.data));
        ul.appendChild(newMessage);
        });