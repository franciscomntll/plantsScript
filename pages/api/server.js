import conectorDB from '../../db/conector'
import { PlantsModel } from '../../db/SchemaPlants';

export default async function handler(req, res) {
    conectorDB()
    const { query: { _limit }, method, body:arrPlants } = req;
    switch (method) {

        case "GET":
            PlantsModel.find()
            .sort()
            break
        case "POST":
           

            break

            
    }

    res.status(200).json({ name: 'John Doe' })
}

