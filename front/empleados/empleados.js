import { getAllEmpleados, deleteEmpleados, insertEmpleados } from '../js/API.js';

document.addEventListener('DOMContentLoaded', () => {
    showDataEmpleados();

});

async function showDataEmpleados() {
    const data = await getAllEmpleados();
    const bodyTable = document.getElementById('empleadoContent');
    data.forEach((empleado, index) => {
        const { _id, nombre, titulo, fecha_nacimiento, fecha_contratacion, direccion, ciudad, telefono } = empleado;
        bodyTable.innerHTML += `
        <tr>
            <th scope="row">${index + 1}</th>
            <td>${nombre}</td>
            <td>${titulo}</td>
            <td>${fecha_nacimiento}</td>
            <td>${fecha_contratacion}</td>
            <td>${direccion}</td>
            <td>${ciudad}</td>
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
                    }).then(async function () {
                        await deleteEmpleados(eliminar.id);
                        window.location = 'empleados.html';
                    });
                } else {
                    swal("Cancelado", "No has eliminado tu data", "error");
                }
            });

        })
    });
}

function sendInfoForm() {
    const agregarEmpleadoForm = document.querySelector('#agregarEmpleadoForm');
    const nombreEmpleadoForm = document.querySelector('#nombreEmpleadoForm');
    const tituloEmpleadoForm = document.querySelector('#tituloEmpleadoForm');
    const nacimientoEmpleadoForm = document.querySelector('#nacimientoEmpleadoForm');
    const contratacionEmpleadoForm = document.querySelector('#contratacionEmpleadoForm');
    const direccionEmpleadoForm = document.querySelector('#direccionEmpleadoForm');
    const ciudadEmpleadoForm = document.querySelector('#ciudadEmpleadoForm');
    const telefonoEmpleadoForm = document.querySelector('#telefonoEmpleadoForm');

    agregarEmpleadoForm.addEventListener('submit', async(e) => {
        e.preventDefault();
        const data = {
            nombre: nombreEmpleadoForm.value,
            titulo: tituloEmpleadoForm.value,
            fecha_nacimiento: nacimientoEmpleadoForm.value,
            fecha_contratacion: contratacionEmpleadoForm.value,
            direccion: direccionEmpleadoForm.value,
            ciudad: ciudadEmpleadoForm.value,
            telefono: telefonoEmpleadoForm.value
        }
        if (await insertEmpleados(data)) {
            swal("Datos enviados satisfactoriamente", "¡Enviado!", "success");
            setTimeout(() => {
                window.location = 'empleados.html';
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
            console.log(cliente);
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
                console.log(newObject);
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