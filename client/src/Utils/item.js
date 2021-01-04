export default async function getItem(id) {
    const response = await fetch(`http://localhost:9000/api/items/${id}`);
    const result = await response.json();
    return result;
}