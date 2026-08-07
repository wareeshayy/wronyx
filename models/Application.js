import mongoose from 'mongoose';
const schema=new mongoose.Schema({jobTitle:String,firstName:String,lastName:String,email:String,phone:String,address:String,linkedin:String,portfolio:String,experience:String,technologies:String,dataEngineering:String,summary:String,coverLetter:String,onsite:String,resumeName:String,resumeType:String,resumeSize:Number},{timestamps:true});
export default mongoose.models.Application||mongoose.model('Application',schema);
