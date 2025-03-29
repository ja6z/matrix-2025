import { supabase } from '~/lib/supabase';

export const BaseService = {
  async getById(table, id) {
    const { data, error } = await supabase
      .from(table)
      .select('*')
      .eq('id', id)
      .single();
    return { data, error };
  },

  async updateTable(table, id, updates) {
    return await supabase
      .from(table)
      .update(updates)
      .eq('id', id);
  },
  // ...otros métodos genéricos
};