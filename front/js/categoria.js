import {getAllCategorias} from './API.js';


async function showDataCategorias() {
    const data = await getAllCategorias();
    console.log(data);
}

showDataCategorias();