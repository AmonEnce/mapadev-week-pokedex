/*
quando clicar no pokemon na listagem temos que esconder o cartao do pokemon aberto e mostrar o carta correspondente ao que foi selecionado na lsitagem

pra isso vamos precisar trabalhar com dois elemetos
1 -listagem  
2 -cartão do pokemon.

precisamos criar duas variaveis no JS para trabalhar com os elementos da tela 

vamos precisar trabalhar com evento de clique feito pelo usuario na listagem de pokemons

-remover a classe aberto so do cartão que esta aberto
- ao clicar em um pokemon da listagem pegamos o id para saber qual cartão mostrar 

-remover a classe ativo que marca o pokemon selecionado
-adicionar a classe ativo no item da lista selecionado
*/

//precisamos criar duas variaveis no JS para trabalhar com os elementos da tela 
const listaSelecaoPokemons = document.querySelectorAll('.pokemon');
const pokemonsCard = document.querySelectorAll('.cartao-pokemon');

//vamos precisar trabalhar com evento de clique feito pelo usuario na listagem de pokemons
listaSelecaoPokemons.forEach(pokemon => {
    pokemon.addEventListener('click', () => {
        //remover a classe aberto so do cartão que esta aberto
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')

        //ao clicar em um pokemon da listagem pegamos o id para saber qual cartão mostrar 
        const idPokemonSelecionado = pokemon.attributes.id.value
        const idDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado;
        const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)
        cartaoPokemonParaAbrir.classList.add('aberto')

        //remover a classe ativo que marca o pokemon selecionado
        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')

        //adicionar a classe ativo no item da lista selecionado
        const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        pokemonSelecionadoNaListagem.classList.add('ativo')
    })
})