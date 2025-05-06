import User from '../models/User.js';

async function getUsers(req, res) {
    try {
        const users = await User.find();
        return res.json(users);
    } catch (error) {
        console.log(`Erro ao procurar usuários: ${error}`);
    }
}

async function createUser(req, res) {
    try {
        const newUser = new User(req.body);
        const saved = await newUser.save();
        return res.json(saved);
    } catch (error) {
        console.log(`Fala ao criar usuário: ${error}`);
    }
}

async function deleteUser(req, res) {
    try {
        const deleted = await User.findByIdAndDelete(req.params.id);
        if (!deleted) return res.json({error: "Livro não encontrado"});
        return res.json({message: "Livro removido com sucesso!"});
    } catch (error) {
        console.log(`Erro ao remover livro: ${error}`);
    }
}

export { getUsers, createUser, deleteUser };