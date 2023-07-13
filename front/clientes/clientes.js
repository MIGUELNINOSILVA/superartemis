import { getAllClientes, deleteClientes, insertClientes, getOneClientes, updateClientes } from '../js/API.js';

document.addEventListener('DOMContentLoaded', () => {
    showDataClientes();

});

async function showDataClientes() {
    const data = await getAllClientes();
    const bodyTable = document.getElementById('clienteContent');
    data.forEach((cliente, index) => {
        const { _id, nombre, nombre_compannia, direccion, telefono } = cliente;
        bodyTable.innerHTML += `
        <tr>
            <th scope="row">${index + 1}</th>
            <td>${nombre}</td>
            <td>${nombre_compannia}</td>
            <td>${direccion}</td>
            <td>${telefono}</td>
            <td>
                <button type="button" class="btn btn-warning editar" data-bs-toggle="modal" data-bs-target="#editarClienteModal" id="${_id}">Editar</button>
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
                        deleteClientes(eliminar.id);
                        window.location = 'clientes.html';
                    });
                } else {
                    swal("Cancelado", "No has eliminado tu data", "error");
                }
            });

        })
    });
}

function sendInfoForm() {
    const agregarClienteForm = document.querySelector('#agregarClienteForm');
    const nombreClienteForm = document.querySelector('#nombreClienteForm');
    const nombreCompaniaClienteForm = document.querySelector('#nombreCompaniaClienteForm');
    const direccionClienteForm = document.querySelector('#direccionClienteForm');
    const telefonoClienteForm = document.querySelector('#telefonoClienteForm');

    agregarClienteForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const data = {
            nombre: nombreClienteForm.value,
            nombre_compannia: nombreCompaniaClienteForm.value,
            direccion: direccionClienteForm.value,
            telefono: telefonoClienteForm.value
        }
        if (insertClientes(data)) {
            swal("Datos enviados satisfactoriamente", "¡Enviado!", "success");
            setTimeout(() => {
                window.location = 'clientes.html';
            }, 2000);
        }
    })
}

function showDataEdit() {
    const nombreClienteFormEdit = document.querySelector('#nombreClienteFormEdit');
    const nombreCompaniaClienteFormEdit = document.querySelector('#nombreCompaniaClienteFormEdit');
    const direccionClienteFormEdit = document.querySelector('#direccionClienteFormEdit');
    const telefonoClienteFormEdit = document.querySelector('#telefonoClienteFormEdit');
    const editarClienteModal = document.querySelector('#editarClienteModal');

    const buttonEditar = document.querySelectorAll('.editar');

    buttonEditar.forEach(editar => {
        editar.addEventListener('click', async () => {
            const id = editar.id;
            const cliente = await getOneClientes(id);
            nombreClienteFormEdit.value = cliente.nombre;
            nombreCompaniaClienteFormEdit.value = cliente.nombre_compannia;
            direccionClienteFormEdit.value = cliente.direccion;
            telefonoClienteFormEdit.value = cliente.telefono;
            editarClienteModal.addEventListener('submit', async (e) => {
                e.preventDefault();
                const newObject = {
                    nombre: nombreClienteFormEdit.value,
                    nombre_compannia: nombreCompaniaClienteFormEdit.value,
                    direccion: direccionClienteFormEdit.value,
                    telefono: telefonoClienteFormEdit.value
                }
                if (await updateClientes(id, newObject)) {
                    swal("Datos enviados actualizados correctamente", "¡Enviado!", "success");
                    setTimeout(() => {
                        window.location = 'clientes.html';
                    }, 1500);
                }
            })
        })
    });

}