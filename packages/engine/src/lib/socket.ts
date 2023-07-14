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

export interface ISocket {
  connectHandler?: SocketFn;
  disconnectHandler?: SocketFn;
  dataHandler?: SocketDataFn;
  errorHandler?: SocketErrorFn;
  host: string;
  port: number;
  on(event: "connect", handler: SocketFn): void;
  on(event: "disconnect", handler: SocketFn): void;
  on(event: "data", handler: SocketDataFn): void;
  on(event: "error", handler: SocketErrorFn): void;
  connect(): void;
  disconnect(): void;
}


export class Socketable implements ISocket {
  connectHandler?: SocketFn;
  disconnectHandler?: SocketFn;
  dataHandler?: SocketDataFn;
  errorHandler?: SocketErrorFn;
  host = "";
  port = 6667;

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

  connect(): void {

  }

  disconnect(): void {
    
  }
}
