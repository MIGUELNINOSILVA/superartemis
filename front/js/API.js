const urlCategoria = "http://localhost:5001/categorias";


export async function getAllCategorias() {
    try {
        const categorias = await fetch(`${urlCategoria}/all`);
        return categorias.json();
    } catch (error) {
        console.log(error);
    }
}