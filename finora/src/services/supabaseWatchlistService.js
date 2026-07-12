
export async function AddStock(supabase, symbol, userId) {
       return await supabase.from('watchlist').insert({ symbol, user_id: userId });
}


export async function RemoveStock(supabase, id) {
    return await supabase.from('watchlist').delete().eq('id', id);
}

export async function FetchWatchlist(supabase, userId) {
    const { data, error } = await supabase.from('watchlist').select('*').eq('user_id', userId);
    if (error) throw error;
    return data || null;
}