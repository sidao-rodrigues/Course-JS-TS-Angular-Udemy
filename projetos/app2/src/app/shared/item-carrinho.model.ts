class ItemCarrinho {
    
    constructor (
        public id: number,
        public img: object,
        public titulo: String,
        public descricao_oferta: string,
        public valor: number,
        public quantidade: number
    ){ }
}

export { ItemCarrinho } //outra forma de exporta a classe, poderia exportar de outra forma (export default ItemCarrinho)