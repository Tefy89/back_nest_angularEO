import { MigrationInterface, QueryRunner } from "typeorm";

export class CreatePedidoproductoTable1732507666061 implements MigrationInterface {
    name = 'CreatePedidoproductoTable1732507666061'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "pedido_productos" ("id" SERIAL NOT NULL, "pedidoId" integer NOT NULL, "productoId" integer NOT NULL, "cantidad" integer NOT NULL, CONSTRAINT "PK_7a85762ff09341b06a4456015c2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "pedido_productos" ADD CONSTRAINT "FK_bc3c920a34df83c6809f6c1df13" FOREIGN KEY ("pedidoId") REFERENCES "pedidos"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "pedido_productos" ADD CONSTRAINT "FK_9a74da9451f7e82263421351df2" FOREIGN KEY ("productoId") REFERENCES "productos"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "pedido_productos" DROP CONSTRAINT "FK_9a74da9451f7e82263421351df2"`);
        await queryRunner.query(`ALTER TABLE "pedido_productos" DROP CONSTRAINT "FK_bc3c920a34df83c6809f6c1df13"`);
        await queryRunner.query(`DROP TABLE "pedido_productos"`);
    }

}
