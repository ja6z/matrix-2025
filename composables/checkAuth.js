import { supabase } from '~/lib/supabase';

/**
 * Revisa el login
 * @param {*} e 
 * @returns 
 */
export default function (e) {
  return new Promise((resolve, reject) => {
    supabase.auth
      .getUser()
      .then((r) => {
        //Verificar si el usuario es null
        if (r.data.user == null) {
          // useLogin();
          resolve(r)
        } else {
          reject(r)
        }
      })
      .catch((e) => {
        console.log(e)
      });
  })

}