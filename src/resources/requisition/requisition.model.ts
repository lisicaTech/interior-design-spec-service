import { Schema, model } from 'mongoose';
import Requisition from '@/resources/requisition/requisition.interface';
/*
requisitionId: string;
    jobtitle: string;
    designation:string;
    department:string;
    description:string;
    experience:number;
    status:string;
*/
const RequisitionSchema = new Schema(
    {
        requisitionId: {
            type: String,
            required: true,
        },
        jobtitle: {
            type: String,
            required: true,
        },
        designation: {
            type: String,
            required: true,
        },
        department: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: false,
        },
        experience: {
            type: Number,
            required: true,
        },
        status: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

export default model<Requisition>('Requisition', RequisitionSchema);