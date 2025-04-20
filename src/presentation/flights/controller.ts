import { Request, Response } from "express";
import { FlightRepository } from "../../domain/repositories/flight.repository";






export class FlightController {
  
  constructor( 
    private readonly repository: FlightRepository,
  ) {}
  
  checkIn( req: Request, res: Response ) {
  
    /**
     * TODO: response entity checIn
     * "flightId":1,
        "takeoffDateTime":1688207580,
        "takeoffAirport":"AeropuertoInternacionalArturoMerinoBenitez,Chile",
        "landingDateTime":1688221980,
        "landingAirport":"AeropuertoInternacionalJorgeCháve,Perú",
        "airplaneId":1,
        "passengers":[{}]
     */
    
    throw new Error("Method not implemented.");
  }

  getFlights = ( req: Request, res: Response ) => {

    this.repository.getAll()
      .then( flights => res.status(200).json({ flights }) )
      .catch( error => res.status(500).json({ err: 'Internal server error' }) )
  }
}


