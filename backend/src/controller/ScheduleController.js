const connection = require('../database/connection');

module.exports = {
    async create(request, response){
        const { date, description, commitment } = request.body;
        const user_id = request.headers.authorization;

        const [id] = await connection('schedule').insert({
            date,
            description,
            commitment,
            user_id,
        });

        return response.json({ id }); 
    },

    async delete(request, response){
        const { id } = request.params;
        const user_id = request.headers.authorization;
       
        const schedule = await connection('schedule')
        .where('id', id)
        .select('user_id')
        .first();

        if(schedule.user_id !== user_id){
            return response.status(401).json({ error: 'Operation not permitted. '});
        }

        await connection('schedule').where('id', id).delete();

        return response.status(204).send();
    }
};