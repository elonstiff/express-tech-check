// Environment loader with fallback for Node.js compatibility
import { readFileSync } from "fs";
import { join } from "path";

function loadEnvFallback() {
  // Check if JWT_SECRET is already loaded (meaning --env-file worked)
  if (process.env.JWT_SECRET) {
    return; // --env-file worked, no need for fallback
  }

  try {
    const envPath = join(process.cwd(), '.env');
    const envFile = readFileSync(envPath, 'utf8');
    const envVars = envFile.split('\n').filter(line => line.trim() && !line.startsWith('#'));
    
    envVars.forEach(line => {
      const [key, ...values] = line.split('=');
      if (key && values.length > 0) {
        process.env[key.trim()] = values.join('=').trim();
      }
    });
    console.log('✓ Environment variables loaded via fallback method');
  } catch (error) {
    console.log('ℹ️  No .env file found or error reading it:', error.message);
  }
}

// Load environment variables immediately when this module is imported
loadEnvFallback();