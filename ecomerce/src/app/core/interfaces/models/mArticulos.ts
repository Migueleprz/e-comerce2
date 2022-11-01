export interface MArticulos {
  id: number,
  nombre: string,
  precio: number,
  preciop: number,
  stock: number,
  image: string,
  image_path: string,
  marca_id: number,
  tipo_id: number,
  talla_id: number,
  sex_id: number,
  descripcion: string,
  marcas: {
    id: number,
    nombre: string
  },
  tipos: {
    id: number,
    nombre: string
  },
  tallas: {
    id: number,
    nombre: string
  },
  sex: {
    id: number,
    nombre: string
  }
}
