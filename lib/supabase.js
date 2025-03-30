import { createClient } from '@supabase/supabase-js';

// Usa `process.env` o `import.meta.env` según tu entorno (Nuxt 2 vs 3)
const supabaseUrl = "https://oondvpdnazcylepeatkk.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9vbmR2cGRuYXpjeWxlcGVhdGtrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI1MjEyMTUsImV4cCI6MjA1ODA5NzIxNX0.vZiXqHcNxnIwR2An-CUYgFI5bEbUftRUSDK7tvvKxSQ";

// Verifica que las variables no sean `undefined`
if (!supabaseUrl || !supabaseKey) {
  throw new Error('Supabase URL y Key son requeridos en .env');
}

export const supabase = createClient(supabaseUrl, supabaseKey);