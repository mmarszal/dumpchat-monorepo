interface  SocketDataFn  {
  (data: string): void
}
interface SocketErrorFn {
  (error: Error): void
}
interface SocketFn {
  (): void
} 
type SocketArgs = ["connect", SocketFn] | ["disconnect", SocketFn] | ["data", SocketDataFn] | ["error", SocketErrorFn];

interface SocketFns {
  on(event: "connect", handler: () => void): void;
  on(event: "disconnect", handler: () => void): void;
  on(event: "data", handler: (data: string) => void): void;
  on(event: "error", handler: (error: Error) => void): void;
}

export class Socket implements SocketFns {
  connectHandler?: SocketFn;
  disconnectHandler?: SocketFn;
  dataHandler?: SocketDataFn;
  errorHandler?: SocketErrorFn;

  on(event: "connect", handler: SocketFn): void;
  on(event: "disconnect", handler: SocketFn): void;
  on(event: "data", handler: SocketDataFn): void;
  on(event: "error", handler: SocketErrorFn): void;
  on(...args: SocketArgs): void {
    const [event, handler] = [...args];
    switch(event) {
      case "connect":
        this.connectHandler = handler;
        break;
      case "disconnect":
        this.disconnectHandler = handler;
        break;
      case "data":
        this.dataHandler = handler;
        break;
      case "error":
        this.errorHandler = handler;
        break;
    }
  }
}

let socket = new Socket();
socket.on("data", (data) => {
  const str: string = data + "Hello";
})

socket.on("connect", () => {

})

socket.on("error", (err) => {
  const msg: string = err.message;
});