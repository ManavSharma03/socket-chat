"use client";
import { useEffect, useRef, useState } from "react";
import io from "socket.io-client";

const Chat = () => {
  const [messagesList, setMessagesList] = useState<any[]>([]);
  const [message, setMessage] = useState<string>("");
  const [socket, setSocket] = useState<any>(null);

  // const socketRef = useRef(io());

  // const socket = socketRef.current;

  //   useEffect(() => {
  //     // initSocket();

  //     ioConnection.on("message", (message) => {
  //       setMessagesList((prevMessages) => [...prevMessages, message]);
  //     });

  //     return () => {
  //       ioConnection.disconnect();
  //     };
  //   }, []);

  // useEffect(() => {
  //     // // Create a socket connection
  //     // const socket = io();

  //     // Listen for incoming messages
  //     socket.on('message', (message) => {
  //         setMessagesList((prevMessages) => [...prevMessages, message]);
  //     });

  //     // Clean up the socket connection on unmount
  //     return () => {
  //         socket.disconnect();
  //     };
  // }, []);

  useEffect(() => {
    initSocket();
    setSocket(io("http://localhost:3000"));
  }, []);

  if (socket) {
    socket.on("connect", () => {
      console.log("connected successfully", socket.id);
    });
  }

  const initSocket = async () => {
    fetch("/api/chat");
  };
  const handleMessage = (e: any) => {
    setMessage(e.target.value);
  };

  //   const handleSendMessage = () => {
  //     // const ioConnection = io();

  //     ioConnection.emit("message", message);
  //     setMessage("");
  //   };

  const handleSendMessage = () => {
    //    // Create a socket connection
    //    const socket = io();
    // Send the message to the server
    socket.emit("message", message);
    // Clear the currentMessage state
    setMessage("");
  };

  const showMessages = () => {
    return (
      <>
        {messagesList.map((message) => {
          return <>{1}</>;
        })}
      </>
    );
  };

  console.debug({ message, messagesList });

  return (
    <>
      <div className="h-screen p-10">
        <div>Chat page</div>
        <div>{showMessages()}</div>
        <div className="flex text-center justify-center">
          <input
            className="p-2"
            placeholder="enter message"
            value={message}
            onChange={handleMessage}
          />
          <button
            onClick={handleSendMessage}
            className="p-2 m-2 border-2 rounded"
          >
            Send
          </button>
        </div>
      </div>
    </>
  );
};

export default Chat;
