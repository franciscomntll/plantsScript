import conectorDB from '../../db/conector'
import { PlantsModel } from '../../db/SchemaPlants';

export default async function handler(req, res) {
    conectorDB()
    const { query: { _limit }, method, body:arrPlants } = req;
    switch (method) {

        case "GET":
            // Get data from your database
            if (req.query._limit) {
                const plants = await PlantsModel.find()
                    .limit(parseInt(_limit));
                res.status(200).json({ plantas: plants });
            } else {
                const plants = await PlantsModel.find();
                res.status(200).json({ plantas: plants });
            }
            break
        case "POST":
            console.log("este",arrPlants.length)
            if(arrPlants?.length > 0) {
                arrPlants.forEach(item => {
                    const Nuevaplanta = new PlantsModel({...item})
                    Nuevaplanta.save()
                })

            }

            break

            
    }

    res.status(200).json({ name: 'John Doe' })
}

