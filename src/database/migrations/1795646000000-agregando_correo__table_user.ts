import { MigrationInterface, QueryRunner } from "typeorm";

export class AgregandoCorreoTableUser1795646000000 implements MigrationInterface {
    name = 'AgregandoCorreoTableUser1795646000000'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "mail" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "mail"`);
    }

}
