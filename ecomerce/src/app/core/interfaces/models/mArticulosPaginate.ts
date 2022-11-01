export interface MArticulosPaginate {
  current_page: number;
  data: [
    id: string,
    nombre: string,
    precio: string,
    preciop: string,
    stock: string,
    image: string,
    image_path: string,
    marca_id: string,
    tipo_id: string,
    talla_id: string,
    sex_id: string,
    descripcion: string,
    marcas: {
      id: string,
      nombre: string
    },
    tipos: {
      id: string,
      nombre: string
    },
    tallas: {
      id: string,
      nombre: string
    },
    sex: {
      id: string,
      nombre: string
    },
  ],
  first_page_url: string,
  from: string,
  last_pag: string,
  last_page_url: string,
  links: [],
  next_page_url: null,
  path: string,
  per_page: string,
  prev_page_url: null,
  to: string,
  total: string
}
