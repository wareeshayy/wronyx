import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/wronyx_db';

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export async function connectToDatabase() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
      serverSelectionTimeoutMS: 1500,
      connectTimeoutMS: 1500,
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongooseInstance) => {
      console.log('Connected to MongoDB database successfully!');
      return mongooseInstance;
    }).catch(err => {
      console.warn('MongoDB connection fallback (in-memory mock mode active):', err.message);
      return null;
    });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}
