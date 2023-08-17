import RequisitionModel from '@/resources/requisition/requisition.model';
import Requisition from '@/resources/requisition/requisition.interface';

class RequisitionService {
    private requisition = RequisitionModel;

    /**
     * Create a new requisition
     */
    public async create(jobtitle: string, designation: string,department:string,description:string,experience:number): Promise<Requisition> {
        try {
            //Create req id
            const requisitionId = generateRandomString(8);
            const status = 'OPEN';
            const requisition = await this.requisition.create({ requisitionId, jobtitle, designation,department,description,experience,status});

            return requisition;
        } catch (error) {
            console.log(`Db error - ${error}`)
            throw new Error('Unable to create requisition');
        }
    }

    /**
     * Get one requisition
     */
    public async get(id:string):Promise<Requisition>{
        const requisition =  (await this.requisition.findOne({requisitionId:id}))!;
        return requisition;
    }

}



const generateRandomString = (length:number):string => {
    let result = '';
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };

export default RequisitionService;