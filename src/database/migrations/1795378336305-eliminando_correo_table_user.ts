import { MigrationInterface, QueryRunner } from "typeorm";

export class EliminandoCorreoTableUser1795378336305 implements MigrationInterface {
    name = 'EliminandoCorreoTableUser1795378336305'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "mail"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "mail" character varying NOT NULL`);
    }

}
