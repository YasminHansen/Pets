const connection = require('../database/connection');

module.exports = {
    async index(request, response){
        const { page = 1 } = request.query;

        const [count] = await connection('pets').count();
        //armazena o numero de pets cadastrados pelo usuário

        const pets = await connection('pets')
        .limit(5)
        .offset((page - 1) * 5)
        .select('*');

        response.header('X-Total-Count', count['count(*)']);

        return response.json(pets);
    },

    async create(request, response){
        const { name, age, weight, gender, castrated, disease } = request.body;
        const user_id = request.headers.authorization;

        const [id] = await connection('pets').insert({
            name,
            age,
            weight,
            gender,
            castrated,
            disease,
            user_id,
        });

        return response.json({ id });
    },

    async delete(request, response){
        const { id } = request.params;
        const user_id = request.headers.authorization;

        const pets = await connection('pets')
        .where('id', id)
        .select('user_id')
        .first();

        if(pets.user_id !== user_id){
            return response.status(401).json({ error: 'Operation not permitted. '});
        }

        await connection('pets').where('id', id).delete();

        return response.status(204).send();
    }
};