import {MigrationInterface, QueryRunner} from "typeorm";

export class init1639476826954 implements MigrationInterface {
    name = 'init1639476826954'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "employee" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "status" "public"."employee_status_enum" NOT NULL DEFAULT 'Unknown', "changedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "PK_3c2bc72f03fd5abbbc5ac169498" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_3c2bc72f03fd5abbbc5ac16949" ON "employee" ("id") `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "public"."IDX_3c2bc72f03fd5abbbc5ac16949"`);
        await queryRunner.query(`DROP TABLE "employee"`);
    }

}
