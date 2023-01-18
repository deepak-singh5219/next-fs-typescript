import mongoose from 'mongoose';

const HeroSchema = new mongoose.Schema({
     superHero:{
        type: String,
        required: true,
        unique: true,
        trim: true
     },
     realName:{
        type:String,
        required: true,
        maxlength:[200,'Can hold maximum 200 charactors']
     }
})

export default mongoose.models.Hero || mongoose.model('Hero',HeroSchema); 