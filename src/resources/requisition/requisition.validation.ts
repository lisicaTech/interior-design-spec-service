import Joi from 'joi';

const create = Joi.object({
    jobtitle: Joi.string().required(),
    designation: Joi.string().required(),
    department: Joi.string().required(),
    description: Joi.string().optional(),
    experience: Joi.number().required(),
});

export default { create };