import { PedidoProducto } from "../../pedido/entities/pedidoproducto.entity";
import { Categoria } from "../../categoria/entities/categoria.entity";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";


@Entity('productos')

export class Producto {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    precio: number;

    @Column()
    stock: number;

    @Column()
    imagen: string;

    @Column()
    descripcion: string;

    @Column()
    estado: boolean;

    @ManyToOne(() => Categoria, (cat) => cat.producto)
    categoria: Categoria

    @OneToMany(() => PedidoProducto, pedprod => pedprod.producto)
    pedidoProducto: PedidoProducto[];
}
