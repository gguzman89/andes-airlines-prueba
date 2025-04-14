import { Request, Response } from "express";
import { FlightRepository } from "../../domain/repositories/flight.repository";






export class FlightController {
  
  constructor( 
    private readonly repository: FlightRepository,
  ) {}
  
  checkIn( req: Request, res: Response ) {
    
    throw new Error("Method not implemented.");
  }

  getFlights = ( req: Request, res: Response ) => {

    this.repository.getAll()
      .then( res.status(200).json )
      .catch( error => res.status(500).json({ err: 'Internal server error' }) )
  }
}


