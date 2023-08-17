import { cleanEnv, str, port } from 'envalid';

function validateEnv(): void {
    cleanEnv(process.env, {
        NODE_ENV: str({
            choices: ['development', 'production'],
        }),
        ATLAS_URI: str(),
        PORT: port({ default: 8080 }),
    });
}

export default validateEnv;