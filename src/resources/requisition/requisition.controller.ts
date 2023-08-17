import { Router, Request, Response, NextFunction } from 'express';
import Controller from '@/utils/interfaces/controller.interface';
import HttpException from '@/utils/exceptions/http.exception';
import validationMiddleware from '@/middleware/validation.middleware';
import validate from '@/resources/requisition/requisition.validation';
import RequisitionService from '@/resources/requisition/requisition.service';

class RequisitionController implements Controller {
    public path = '/requisitions';
    public router = Router();
    private RequisitionService = new RequisitionService();

    constructor() {
        this.initialiseRoutes();
    }

    private initialiseRoutes(): void {
        this.router.post(
            `${this.path}`,
            validationMiddleware(validate.create),
            this.create
        );
        this.router.get(
            `${this.path}/:id`,
            this.getOne
        );
    }

    private create = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<Response | void> => {
        try {
            const { jobtitle, designation,department,description,experience } = req.body;

            const requisition = await this.RequisitionService.create(jobtitle, designation,department,description,experience);

            res.status(201).json({ requisition });
        } catch (error:any) {
            next(new HttpException(400, error.message));
        }
    };

    private getOne = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<Response | void> => {
        try {
            const id = req.params.id;
            console.log(`id -${id}`)
            const requisition = await this.RequisitionService.get(id);
            res.status(200).json({ requisition });
        } catch (error:any) {
            next(new HttpException(400, error.message));
        }
        
    }
    
}

export default RequisitionController;