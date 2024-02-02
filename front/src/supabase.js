// supabase.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://iuvfnflefrnkmnhmwstc.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml1dmZuZmxlZnJua21uaG13c3RjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY3NTM4MzIsImV4cCI6MjAyMjMyOTgzMn0._VXsxAON5E6Srppc3nlOBsontBxI_zvK3wBZI-duPFM';

export const supabase = createClient(supabaseUrl, supabaseKey);

// Función para verificar credenciales
export const verifyCredentials = async (username, password) => {
    try {
      // Realiza una consulta a la tabla personalizada para verificar las credenciales
      const { data, error } = await supabase
        .from('usuarios')
        .select()
        .eq('username', username)
        .eq('password', password)
        .single();
  
      // Resto del código...
    } catch (error) {
      console.error('Error al verificar credenciales:', error);
      return { error: 'Error al verificar credenciales' };
    }
  };