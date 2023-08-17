import 'dotenv/config';
import 'module-alias/register';
import validateEnv from '@/utils/validateEnv';
import App from './app';
import RequisitionController from '@/resources/requisition/requisition.controller';

validateEnv();

const app = new App(
    [new RequisitionController()],
    Number(process.env.PORT)
);

app.listen();