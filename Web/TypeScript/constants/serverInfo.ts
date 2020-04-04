export default {
    host: "https://localhost:5001",
    api: {
        clientes: {
            base: '/clientes',
            search: '/clientes/search',
            get: '/clientes/get',
        }
    },
    web: {
        clientes: {
            index: "/Clientes/Index",
            nuevo: "/Clientes/Nuevo",
            editar: "/Clientes/Editar"
        }
    }

}
