import mongoose from 'mongoose';

async function main() {
    try {
        await mongoose.connect('mongodb+srv://yoinsider:lucas22074642005@cluster0.2tmbwf4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
        console.log("Conectado ao banco!")
    } catch (error) {
        console.log(`Erro: ${error}`);
    }
};

export default main;