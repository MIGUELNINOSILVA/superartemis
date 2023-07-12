const urlCategoria = "http://localhost:5001/categorias";


export async function getAllCategorias() {
    try {
        const categorias = await fetch(`${urlCategoria}/all`);
        return categorias.json();
    } catch (error) {
        console.log(error);
    }
}

export async function deleteCategoria(id) {
    try {
        const categorias = await fetch(`${urlCategoria}/remove/${id}`,{
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'}
        });
        const response = await categorias.json();
        window.location = 'index.html';
        return response;
    } catch (error) {
        console.log(error);
    }
}