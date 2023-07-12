const urlCategoria = "http://localhost:5001/categorias";


export async function getAllCategorias() {
    try {
        const categorias = await fetch(`${urlCategoria}/all`);
        return categorias.json();
    } catch (error) {
        console.log(error);
        swal({
            title: "Error 404",
            text: "Error Conexión a la Base de datos!",
            icon: "error",
          });
    }
}

export async function getOneCategorias(id) {
    try {
        const categorias = await fetch(`${urlCategoria}/${id}`);
        return categorias.json();
    } catch (error) {
        console.log(error);
    }
}

export async function insertCategorias(data) {
    try {
        const categorias = await fetch(`${urlCategoria}/add`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)

        })
        const response = await categorias.json();
        return response;
    } catch (error) {
        console.log(error);
    }
}

export async function updateCategorias(id, data) {
    try {
        const categorias = await fetch(`${urlCategoria}/upd/${id}`,{
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        const response = await categorias.json();
        return response;
    } catch (error) {
        console.log(error);
    }
}

export async function deleteCategoria(id) {
    try {
        const categorias = await fetch(`${urlCategoria}/remove/${id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        });
        const response = await categorias.json();
        window.location = 'index.html';
        return response;
    } catch (error) {
        console.log(error);
    }
}