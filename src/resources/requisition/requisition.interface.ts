import { Document } from 'mongoose';

export default interface Requisition extends Document {
    requisitionId: string;
    jobtitle: string;
    designation:string;
    department:string;
    description:string;
    experience:number;
    status:string;
}