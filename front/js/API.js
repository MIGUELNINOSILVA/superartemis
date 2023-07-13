const urlCategoria = "http://localhost:5001/categorias";
const urlCliente = "http://localhost:5001/clientes";
const urlEmpleado = "http://localhost:5001/empleados";

// Categorias API
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

// Clientes API
export async function getAllClientes() {
    try {
        const clientes = await fetch(`${urlCliente}/all`);
        return clientes.json();
    } catch (error) {
        console.log(error);
        swal({
            title: "Error 404",
            text: "Error Conexión a la Base de datos!",
            icon: "error",
          });
    }
}

export async function getOneClientes(id) {
    try {
        const clientes = await fetch(`${urlCliente}/${id}`);
        return clientes.json();
    } catch (error) {
        console.log(error);
    }
}

export async function deleteClientes(id) {
    try {
        const clientes = await fetch(`${urlCliente}/remove/${id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        });
        const response = await clientes.json();
        return response;
    } catch (error) {
        console.log(error);
    }
}

export async function insertClientes(data) {
    try {
        const clientes = await fetch(`${urlCliente}/add`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)

        })
        const response = await clientes.json();
        return response;
    } catch (error) {
        console.log(error);
    }
}

export async function updateClientes(id, data) {
    try {
        const clientes = await fetch(`${urlCliente}/upd/${id}`,{
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        const response = await clientes.json();
        return response;
    } catch (error) {
        console.log(error);
    }
}

// Empleados API
export async function getAllEmpleados() {
    try {
        const empleados = await fetch(`${urlEmpleado}/all`);
        return empleados.json();
    } catch (error) {
        console.log(error);
        swal({
            title: "Error 404",
            text: "Error Conexión a la Base de datos!",
            icon: "error",
          });
    }
}

export async function getOneEmpleados(id) {
    try {
        const empleados = await fetch(`${urlEmpleado}/${id}`);
        return empleados.json();
    } catch (error) {
        console.log(error);
    }
}

export async function insertEmpleados(data) {
    try {
        const empleados = await fetch(`${urlEmpleado}/add`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)

        })
        const response = await empleados.json();
        return response;
    } catch (error) {
        console.log(error);
    }
}

export async function updateEmpleados(id, data) {
    try {
        const empleados = await fetch(`${urlEmpleado}/upd/${id}`,{
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        const response = await empleados.json();
        return response;
    } catch (error) {
        console.log(error);
    }
}

export async function deleteEmpleados(id) {
    try {
        const empleados = await fetch(`${urlEmpleado}/remove/${id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        });
        const response = await empleados.json();
        window.location = 'index.html';
        return response;
    } catch (error) {
        console.log(error);
    }
}