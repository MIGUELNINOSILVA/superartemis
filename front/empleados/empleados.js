import { getAllEmpleados, deleteEmpleados, insertEmpleados, getOneEmpleados, updateEmpleados } from '../js/API.js';

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
                <button type="button" class="btn btn-warning editar" data-bs-toggle="modal" data-bs-target="#editarEmpleadoModal" id="${_id}">Editar</button>
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
    const nombreEmpleadoFormEdit = document.querySelector('#nombreEmpleadoFormEdit');
    const tituloEmpleadoFormEdit = document.querySelector('#tituloEmpleadoFormEdit');
    const nacimientoEmpleadoFormEdit = document.querySelector('#nacimientoEmpleadoFormEdit');
    const contratacionEmpleadoFormEdit = document.querySelector('#contratacionEmpleadoFormEdit');
    const direccionEmpleadoFormEdit =  document.querySelector('#direccionEmpleadoFormEdit');
    const ciudadEmpleadoFormEdit = document.querySelector('#ciudadEmpleadoFormEdit');
    const telefonoEmpleadoFormEdit = document.querySelector('#telefonoEmpleadoFormEdit');

    const editarEmpleadoForm = document.querySelector('#editarEmpleadoForm');

    const buttonEditar = document.querySelectorAll('.editar');

    buttonEditar.forEach(editar => {
        editar.addEventListener('click', async () => {
            const id = editar.id;
            const empleado = await getOneEmpleados(id);
            console.log(empleado);
            nombreEmpleadoFormEdit.value = empleado.nombre;
            tituloEmpleadoFormEdit.value = empleado.titulo;
            nacimientoEmpleadoFormEdit.value = empleado.fecha_nacimiento;
            contratacionEmpleadoFormEdit.value = empleado.fecha_contratacion;
            direccionEmpleadoFormEdit.vaule = empleado.direccion;
            ciudadEmpleadoFormEdit.value = empleado.ciudad;
            telefonoEmpleadoFormEdit.value = empleado.telefono;

            editarEmpleadoForm.addEventListener('submit', async (e) => {
                e.preventDefault();
                const newObject = {
                    nombre: nombreEmpleadoFormEdit.value,
                    titulo: tituloEmpleadoFormEdit.value,
                    fecha_nacimiento: nacimientoEmpleadoFormEdit.value,
                    fecha_contratacion: contratacionEmpleadoFormEdit.value,
                    direccion: direccionEmpleadoFormEdit.value,
                    ciudad: ciudadEmpleadoFormEdit.value,
                    telefono: telefonoEmpleadoFormEdit.value
                }
                console.log(newObject);
                if (await updateEmpleados(id, newObject)) {
                    swal("Datos enviados actualizados correctamente", "¡Enviado!", "success");
                    setTimeout(() => {
                        window.location = 'empleados.html';
                    }, 1500);
                }
            })
        })
    });

}