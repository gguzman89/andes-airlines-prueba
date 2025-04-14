import { FlightDatasource } from "../../domain/datasources/flight.datasource";
import { FlightEntity } from "../../domain/entities/flight.entity";






export class FlightDatasourceImpl implements FlightDatasource {

  async findBy(id: number): Promise<FlightEntity> {
    throw new Error("Method not implemented.");
  }

  async getAll(): Promise<FlightEntity[]> {
    throw new Error("Method not implemented.");
  }

}


