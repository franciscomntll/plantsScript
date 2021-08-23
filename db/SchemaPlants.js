import mongoose from "mongoose";

const PlantsSchema = new mongoose.Schema({
    idPlant : String,
    startTime : Date,
    endTime: Date,
    ownerID : String,
})

export const PlantsModel = mongoose.models.plants || mongoose.model('plants', PlantsSchema);