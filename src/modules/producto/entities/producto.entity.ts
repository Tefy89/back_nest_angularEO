import { Categoria } from "../../categoria/entities/categoria.entity";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";

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


}