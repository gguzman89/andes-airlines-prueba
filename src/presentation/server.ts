import express, { Router } from "express";


interface Options {
  port: number;
  routes: Router;
  public_path?: string;
}


export class Server {

  public readonly app = express();
  private readonly port: number;
  private readonly routes: Router;
  private serverListener?: any;

  private readonly publicPath: string;

  constructor( options: Options ) {
  
    const { port, routes, public_path='public' } = options;
    this.port = port;
    this.routes = routes;

    this.publicPath = public_path;
  }

  async start() {

    this.app.use( express.json() ); //raw
    this.app.use( express.urlencoded({ extended: true }) ); // x-www-form-urlencoded
    // this.app.use( compression() ); // compress bodies for request

    // this.app.use( cors(corsOptions) );

    this.app.use( this.routes );

    this.serverListener = this.app.listen( this.port, () => {

      console.log( `Listening on port ${this.port}` );
    });
  }

  close = () => { this.serverListener.close(); }
}


