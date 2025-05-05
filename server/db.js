import pkg from 'pg';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables

const { Pool } = pkg;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production'
    ? { rejectUnauthorized: false } // Neon requires SSL in production
    : false,
});

// Optional: test connection once at startup
pool.connect()
  .then(() => console.log('✅ Connected to PostgreSQL!'))
  .catch((err) => console.error('❌ Database connection error:', err));

export default pool;
