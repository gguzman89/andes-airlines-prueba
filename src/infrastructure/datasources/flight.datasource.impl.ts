import { airplane } from "../../data";
import { FlightDatasource } from "../../domain/datasources/flight.datasource";
import { FlightEntity } from "../../domain/entities/flight.entity";
import { IFlight } from "../../domain/interfaces/IFlight.interface";






export class FlightDatasourceImpl implements FlightDatasource {

  async findBy(id: number): Promise<FlightEntity> {
    throw new Error("Method not implemented.");
  }

  async getAll(): Promise<FlightEntity[]> {

    const flights = await airplane.flight.findMany();

    const flightsMapping: FlightEntity[] = flights.map( FlightEntity.fromObject );

    return flightsMapping;
  }

}


