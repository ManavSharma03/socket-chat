import { Server, Socket } from "socket.io";
// import {io} from '@/socket.js';

export async function GET(req: any) {
  //   console.debug({ res: JSON.stringify(res) });
  //   if (!res.socket.server.io) {
  const io = (global as any)?._io;
  //   io.on();
  if (io) {
    io.on("connection", (socket: any) => {
      console.log("Client connected", socket);
      // socket.on("disconnect", () => {
      //   console.log("Client disconnected");
      // });
    });
  }
  // res.socket.server.io = io;
  //   }
  //   res.end();
  return Response.json({});
}
