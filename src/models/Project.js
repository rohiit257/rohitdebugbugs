import mongoose from "mongoose";

//project schema
const ProjectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    imagelink: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.models.Projects || mongoose.model('Projects', ProjectSchema);