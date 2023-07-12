import { getAllCategorias, deleteCategoria, insertCategorias } from './API.js';

document.addEventListener('DOMContentLoaded', () => {
    showDataCategorias();
})

async function showDataCategorias() {
    const data = await getAllCategorias();
    const bodyTable = document.getElementById('categoriaContent');
    data.forEach((categoria, index) => {
        const { _id, nombre, imagen, descripcion } = categoria;
        bodyTable.innerHTML += `
        <tr>
            <th scope="row">${index + 1}</th>
            <td>${nombre}</td>
            <td>${descripcion}</td>
            <td>${imagen}</td>
            <td>
                <button class="btn btn-warning editar" id="${_id}">Editar</button>
                <button class="btn btn-danger eliminar" id="${_id}">Eliminar</button>
            </td>
        </tr>
        `
    });
    // Llamar a la función para mostrar los botones de eliminación
    showEliminarButtons();
    sendInfoForm();
}

function showEliminarButtons() {
    const botonEliminar = document.querySelectorAll('.eliminar');
    botonEliminar.forEach(eliminar => {
        eliminar.addEventListener('click', async () => {
            await deleteCategoria(eliminar.id);
        })
    });
}

function sendInfoForm() {
    const agregarCategoriaForm = document.querySelector('#agregarCategoriaForm');
    const nombreCategoriaForm = document.querySelector('#nombreCategoriaForm');
    const descripcionCategoriaForm = document.querySelector('#descripcionCategoriaForm');
    const imagenCategoriaForm = document.querySelector('#imagenCategoriaForm');

    agregarCategoriaForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const data = {
            nombre: nombreCategoriaForm.value,
            descripcion: descripcionCategoriaForm.value,
            imagen: imagenCategoriaForm.value
        }
        if (insertCategorias(data)) {
            alert("Datos enviados satisfactoriamente.");
            window.location = 'index.html';
        }
    })
}