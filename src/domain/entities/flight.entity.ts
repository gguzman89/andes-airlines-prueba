import { CustomError } from "../errors/custom.error";






export class FlightEntity {
  
  constructor(
    public flightId          : number,
    public takeoffDateTime   : number,
    public takeoffAirport    : string,
    public landingDateTime   : number,
    public landingAirport    : string,
    public airplaneId        : number,
    public boardingPass      : {[key: string]: any}[],
    public airplane          : {[key: string]: any},
  ){}

  public static fromObject( obj: {[key: string]: any} ): FlightEntity {

    const { flight_id, takeoff_date_time, takeoff_airport, landing_date_time, landing_airport, airplane_id, 
            boarding_pass, airplane
    } = obj;

    if ( flight_id === undefined ) throw CustomError.badRequest( 'Missing ID Flight required' );

    return new FlightEntity(
      flight_id, takeoff_date_time, takeoff_airport, landing_date_time, landing_airport, airplane_id,
      boarding_pass, airplane
    );
  }
}


