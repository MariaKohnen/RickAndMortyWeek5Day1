
export const fetchCharacters = (url : string) => {
    return fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json()
            }
            throw new Error("Error while loading characters from Rick and Morty API!")
        })
        .catch(console.error)
}