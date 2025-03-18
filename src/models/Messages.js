import mongoose from "mongoose"; // Fixed typo from moongoose to mongoose

const MessageSchema = new mongoose.Schema({
    message: {
        type: String,
        minlength: 1,  // Minimum length for message
        maxlength: 249, // Maximum length for message
        required: true // Make sure message is required
    },
    createdAt: {
        type: Date,
        default: Date.now // Automatically set the current date and time
    }
});

export default mongoose.models.Messages || mongoose.model('Messages', MessageSchema);
