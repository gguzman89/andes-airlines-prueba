import { Router } from "express";
import { FlightRoutes } from "./flights/routes";






export class AppRoutes {

  static get routes(): Router {

    const router = Router();

    // Define routes
    router.get('/api/secure-route', ( req, res ) => {
      res.json({ msg: 'Message example app routes' })
    })
    
    router.use('/api/flights', FlightRoutes.routes);

    return router;
  }
}


