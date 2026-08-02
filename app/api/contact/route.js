import { NextResponse } from 'next/server';
import { connectToDatabase } from '../../../lib/mongodb';
import Lead from '../../../models/Lead';

// In-memory store fallback when MongoDB instance is not connected locally
const leadMemoryStore = [];

export async function POST(request) {
  try {
    const body = await request.json();
    const { fullName, email, company, objective } = body;

    if (!fullName || !email || !company) {
      return NextResponse.json({ success: false, message: 'Missing required fields' }, { status: 400 });
    }

    const conn = await connectToDatabase();
    if (conn && conn.connection && conn.connection.readyState === 1) {
      const newLead = await Lead.create({ fullName, email, company, objective });
      return NextResponse.json({ success: true, message: 'Executive request received via MERN API & stored in MongoDB!', data: newLead });
    } else {
      const newLead = { id: Date.now(), fullName, email, company, objective, createdAt: new Date() };
      leadMemoryStore.push(newLead);
      return NextResponse.json({ success: true, message: 'Executive request logged successfully!', data: newLead });
    }
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}
