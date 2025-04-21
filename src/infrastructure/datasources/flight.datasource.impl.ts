import { airplane } from "../../data";
import { FlightDatasource, FlightEntity } from "../../domain";






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


