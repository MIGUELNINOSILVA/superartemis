import { getAllCategorias, getOneCategorias, deleteCategoria, insertCategorias, updateCategorias } from './API.js';

document.addEventListener('DOMContentLoaded', () => {
    showDataCategorias();

});

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
                <button type="button" class="btn btn-warning editar" data-bs-toggle="modal" data-bs-target="#editarCategoriaModal" id="${_id}">Editar</button>
                <button class="btn btn-danger eliminar" id="${_id}">Eliminar</button>
            </td>
        </tr>
        `
    });
    // Llamar a la función para mostrar los botones de eliminación
    showEliminarButtons();
    sendInfoForm();
    showDataEdit();
}

function showEliminarButtons() {
    const botonEliminar = document.querySelectorAll('.eliminar');
    botonEliminar.forEach(eliminar => {
        eliminar.addEventListener('click', async () => {
            swal({
                title: "Estás seguro?",
                text: "No podrás recuperar tus datos!",
                icon: "warning",
                buttons: [
                    'No, cancelar!',
                    'Sí, estoy segur@!'
                ],
                dangerMode: true,
            }).then(function (isConfirm) {
                if (isConfirm) {
                    swal({
                        title: 'Eliminado Correctamente!',
                        text: 'Ya no puedes recuperar tus datos',
                        icon: 'success'
                    }).then(function () {
                        deleteCategoria(eliminar.id);
                    });
                } else {
                    swal("Cancelado", "No has eliminado tu data", "error");
                }
            });

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
            swal("Datos enviados satisfactoriamente", "¡Enviado!", "success");
            setTimeout(() => {
                window.location = 'index.html';
            }, 2000);
        }
    })
}


function showDataEdit() {
    const nombreCategoriaFormEdit = document.querySelector('#nombreCategoriaFormEdit');
    const descripcionCategoriaFormEdit = document.querySelector('#descripcionCategoriaFormEdit');
    const imagenCategoriaFormEdit = document.querySelector('#imagenCategoriaFormEdit');
    const editarCategoriaForm = document.querySelector('#editarCategoriaForm');

    const buttonEditar = document.querySelectorAll('.editar');

    buttonEditar.forEach(editar => {
        editar.addEventListener('click', async () => {
            const id = editar.id;
            const categoria = await getOneCategorias(id);
            console.log(categoria);
            nombreCategoriaFormEdit.value = categoria.nombre;
            descripcionCategoriaFormEdit.value = categoria.descripcion;
            imagenCategoriaFormEdit.value = categoria.imagen;
            editarCategoriaForm.addEventListener('submit', async (e) => {
                e.preventDefault();
                const newObject = {
                    nombre: nombreCategoriaFormEdit.value,
                    descripcion: descripcionCategoriaFormEdit.value,
                    imagen: imagenCategoriaFormEdit.value
                }
                console.log(newObject);
                if (await updateCategorias(id, newObject)) {
                    swal("Datos enviados actualizados correctamente", "¡Enviado!", "success");
                    setTimeout(() => {
                        window.location = 'index.html';
                    }, 1500);
                }
            })
        })
    });

}


