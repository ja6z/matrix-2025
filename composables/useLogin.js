import { supabase } from '~/lib/supabase';

export default function (e) {
	return supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: window.location.href  // redirige al mismo sitio luego de login
        }
      }).then(r=>console.log(r)).catch(e=>console.log(e))
  
  }