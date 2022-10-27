import api from "../api/config";

class PokemonService {
  static instance = new PokemonService();

  getPokemons(page) {
    return api.get("/.netlify/functions/server/products", {
      params: {
        page,
        limit: 24,
      },
    });
  }

  getPokemonDetails(id) {
    return api.get(`/.netlify/functions/server/products/${id}`);
  }
}

export default PokemonService.instance;
