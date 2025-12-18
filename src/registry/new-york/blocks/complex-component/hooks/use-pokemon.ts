// This is a simple utility function that returns a Pokemon image URL.
// In a real application, this could be a more complex hook with state management.

export function usePokemonImage(number: number) {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${number}.png`;
}
