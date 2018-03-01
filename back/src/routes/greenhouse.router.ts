import { GreenhouseController } from './../controllers/greenhouse.controller';
import { Router, Request, Response } from 'express';
import { IRouter } from './../interfaces/router.interface';
import GreenhouseDBModel from '../schemas/greenhouse.schema';

class GreenhouseRouter implements IRouter{

  public router: Router;en

  constructor(){
    this.router = Router();
    this.routes();
  }

  public list(req: Request, res: Response):void{
    GreenhouseController.list()
    .then((data)=>{
      res.status(200).json({data});
    })
    .catch((error)=>{
        res.status(500).json({error});
    });
  }

  public select(req: Request, res: Response):void{
    const id:string = req.params.id;
    GreenhouseController.select(id)
    .then(data=>{
      res.status(200).json({data});
    })
    .catch(error=>{
      res.status(500).json({error});
    });
  }

  public create(req: Request, res: Response):void{

    const newGreenhouse = req.body;

    GreenhouseController.create(newGreenhouse)
    .then(data=>{
        res.status(200).json({data});
    })
    .catch(error=>{
      res.status(500).json({error});
    });
  }

  public update(req: Request, res: Response):void{
    const id :string = req.params.id;
    const greenhouse = req.body;
    GreenhouseController.update(id, greenhouse)
    .then(data=>{
      res.status(200).json({data});
    })
    .catch(error=>{
      res.status(500).json({error});
    });
  }

  public remove(req: Request, res: Response):void{
    const id: string = req.params.id;

    GreenhouseController.remove(id)
    .then(()=>{
      res.status(204).end();
    })
    .catch(error=>{
      res.status(500).json({error});
    });
  }

  public routes(){
    this.router.get("/", this.list);
    this.router.get("/:id", this.list);
    this.router.post("/",this.create);
    this.router.put("/:id",this.update);
    this.router.delete("/:id", this.remove);
  };
  
}

const greenhouseRouter = new GreenhouseRouter().router;

export default greenhouseRouter;