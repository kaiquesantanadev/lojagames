const localStorageService = {
    getJogos() {
        const jogos = localStorage.getItem('jogos');
        return jogos ? JSON.parse(jogos) : [];
    },

    saveJogos(jogos) {
        localStorage.setItem('jogos', JSON.stringify(jogos));
    }
};

export default localStorageService;
