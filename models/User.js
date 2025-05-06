import mongoose, { Schema } from 'mongoose';

const userSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    idade: { type: Number, required: true },
}, { timestamps: true });

export default mongoose.model('User', userSchema);