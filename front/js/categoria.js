import { getAllCategorias } from './API.js';

document.addEventListener('DOMContentLoaded', () => {
    showDataCategorias();
})

async function showDataCategorias() {
    const data = await getAllCategorias();
    console.log(data);
    const bodyTable = document.getElementById('categoriaContent');
    data.forEach((categoria, index) => {
        const { _id, nombre, imagen, descripcion } = categoria;
        console.log(nombre);
        bodyTable.innerHTML += `
        <tr>
            <th scope="row">${index + 1}</th>
            <td>${nombre}</td>
            <td>${descripcion}</td>
            <td>${imagen}</td>
            <td>
                <button class="btn btn-warning editar" id="${_id}">Editar</button>
                <button class="btn btn-danger delete" id="${_id}">Eliminar</button>
            </td>
        </tr>
        `
    });
}

