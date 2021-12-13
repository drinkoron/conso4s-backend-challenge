import {MigrationInterface, QueryRunner} from "typeorm";

export class init1639404539464 implements MigrationInterface {
    name = 'init1639404539464'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "employee" DROP COLUMN "changedAt"`);
        await queryRunner.query(`ALTER TABLE "employee" ADD "changedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "employee" DROP COLUMN "changedAt"`);
        await queryRunner.query(`ALTER TABLE "employee" ADD "changedAt" TIMESTAMP NOT NULL DEFAULT now()`);
    }

}
