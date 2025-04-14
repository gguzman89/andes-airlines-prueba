import { Router } from "express";
import { FlightDatasourceImpl } from "../../infrastructure/datasources/flight.datasource.impl";
import { FlightRepositoryImpl } from "../../infrastructure/repositories/flight.repository.impl";
import { FlightController } from "./controller";






export class FlightRoutes {

  static get routes(): Router {

    const router = Router();

    const datasource = new FlightDatasourceImpl(); // origin data DB
		const repository = new FlightRepositoryImpl( datasource ); // howto-use

    const controller = new FlightController( repository );

    router.get( '/', controller.getFlights );
    router.get( '/:id/passangers', controller.checkIn );

    return router;
  }
}


