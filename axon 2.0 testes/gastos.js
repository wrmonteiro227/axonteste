async function registrarGasto() {
    const n = document.getElementById('gasto-nome').value.trim();
    const v = document.getElementById('gasto-valor').value.trim();
    
    if(n && v && USUARIO_LOGADO) {
        const novoGasto = { 
            nome: n, 
            valor: v, 
            data: formatarDataHoje(), 
            status: 'gasto', 
            tipo: 'gasto_diario', 
            user_id: USUARIO_LOGADO.id 
        };
        
        const { error } = await _supabase.from('financeiro').insert([novoGasto]);
        
        if (!error) {
            document.getElementById('gasto-nome').value = '';
            document.getElementById('gasto-valor').value = '';
            carregarDados();
        } else {
            console.error("Erro ao registrar gasto:", error);
        }
    }
}