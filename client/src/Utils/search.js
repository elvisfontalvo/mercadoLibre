
export default async function getProducts(query) {
    const response = await fetch(`http://localhost:9000/api/items?q=${query}`);
    const result = await response.json();
    return result;
}