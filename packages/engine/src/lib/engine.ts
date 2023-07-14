export function engine(): string {
  return 'engine';
}

import { Socketable } from "./socket";

export class Engine<SocketType extends Socketable> {
  socket: Socketable;

  constructor(socketType: SocketType) {
    this.socket = socketType;
  }

  setHost(host: string): void {
    this.socket.host = host;
  }

  setPort(port: number): void {
    this.socket.port = port;
  }

  connect() {
    this.socket.on("connect", () => {
      console.log("Bouncer Connected")
    });

    this.socket.on("disconnect", () => {
      console.log("Bouncer disconnected")
    });

    this.socket.on("data", (data) => {
      console.log(data)
    });

    this.socket.on("error", (error) => {
      console.log(`Bouncer error: ${error}`)
    });

    this.socket.connect();
  }

  disconnect() {

  }
}

export { ISocket, Socketable } from "./socket"