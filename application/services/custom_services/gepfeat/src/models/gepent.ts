
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const gepentSchema = new Schema({

})

const gepentModel = mongoose.model('gepent', gepentSchema, 'gepent');
export default gepentModel;
