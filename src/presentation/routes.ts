import { Router } from "express";






export class AppRoutes {

  static get routes(): Router {

    const router = Router();

    // Define routes
    router.get('/api/secure-route', ( req, res ) => {
      res.json({ msg: 'Message example app routes' })
    })
    // router.use('/api/passengers')
    // router.use('/api/purchases')
    
    // router.use('/api/flights')

    return router;
  }
}


