const localStorageClientes = {
    getClientes() {
        const clientes = localStorage.getItem('clientes');
        return clientes ? JSON.parse(clientes) : [];
    },

    saveClientes(clientes) {
        localStorage.setItem('clientes', JSON.stringify(clientes));
    }

    
};

export default localStorageClientes;
