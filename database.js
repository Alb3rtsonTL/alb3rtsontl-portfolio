// database.js

const mongoose = require('mongoose');

// Users Collection Schema
const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

// Profile Collection Schema
const profileSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    bio: String,
    avatar: String,
    socialLinks: {
        linkedin: String,
        github: String,
        personalWebsite: String
    }
});

// Projects Collection Schema
const projectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: String,
    createdAt: { type: Date, default: Date.now },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

// Project Images Collection Schema
const projectImageSchema = new mongoose.Schema({
    projectId: { type: mongoose.Schema.Types.ObjectId, ref: 'Project' },
    imageUrl: String,
    description: String
});

// Project Technologies Collection Schema
const projectTechnologiesSchema = new mongoose.Schema({
    projectId: { type: mongoose.Schema.Types.ObjectId, ref: 'Project' },
    technologyId: { type: mongoose.Schema.Types.ObjectId, ref: 'Technology' }
});

// Technologies Collection Schema
const technologySchema = new mongoose.Schema({
    name: { type: String, required: true },
    categoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'TechCategory' }
});

// Technology Categories Collection Schema
const techCategorySchema = new mongoose.Schema({
    name: { type: String, required: true }
});

// Testimonials Collection Schema
const testimonialSchema = new mongoose.Schema({
    clientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Client' },
    message: String,
    createdAt: { type: Date, default: Date.now }
});

// Clients Collection Schema
const clientSchema = new mongoose.Schema({
    name: { type: String, required: true },
    logo: String
});

// Contact Messages Collection Schema
const contactMessageSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: String,
    createdAt: { type: Date, default: Date.now }
});

// Create Models
const User = mongoose.model('User', userSchema);
const Profile = mongoose.model('Profile', profileSchema);
const Project = mongoose.model('Project', projectSchema);
const ProjectImage = mongoose.model('ProjectImage', projectImageSchema);
const ProjectTechnologies = mongoose.model('ProjectTechnologies', projectTechnologiesSchema);
const Technology = mongoose.model('Technology', technologySchema);
const TechCategory = mongoose.model('TechCategory', techCategorySchema);
const Testimonial = mongoose.model('Testimonial', testimonialSchema);
const Client = mongoose.model('Client', clientSchema);
const ContactMessage = mongoose.model('ContactMessage', contactMessageSchema);

module.exports = {
    User,
    Profile,
    Project,
    ProjectImage,
    ProjectTechnologies,
    Technology,
    TechCategory,
    Testimonial,
    Client,
    ContactMessage
};