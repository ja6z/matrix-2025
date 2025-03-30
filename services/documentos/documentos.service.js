import { BaseService } from '../base/base.service';
import { supabase } from '~/lib/supabase';

export const SalesService = {
  async createSale(saleData) {
    // 1. Usar método genérico  
    const { data, error } = await supabase
      .from('sales')
      .insert(saleData)
      .select();
    
    // 2. Lógica específica  
    if (data) {
      await this._updateInventory(data.items);
      await this._generateReceivable(data.id);
    }
    return { data, error };
  },

  _updateInventory(items) {  }, // Método privado
  _generateReceivable(saleId) {} ,
};