import { clearSearch, fetchAndDisplayMusic } from './music.js';

// Debounce function para otimizar performance
const debounce = (func, wait) => {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
};

// Função para manipular a pesquisa
const handleSearch = () => {
    const searchTerm = document.getElementById('search-input').value;

    if (searchTerm.trim() === '') {
        clearSearch();
    } else {
        fetchAndDisplayMusic(searchTerm);
    }
};

// Adiciona debounce de 300ms para evitar muitas requisições
const debouncedSearch = debounce(handleSearch, 300);

// Adiciona o evento de pesquisa ao campo de entrada
document.getElementById('search-input').addEventListener('input', debouncedSearch);

