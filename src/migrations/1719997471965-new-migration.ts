import { MigrationInterface, QueryRunner } from "typeorm";

export class NewMigration1719997471965 implements MigrationInterface {
    name = 'NewMigration1719997471965'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "message" ("id" BIGSERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying(20) NOT NULL, "message" character varying(255) NOT NULL, CONSTRAINT "PK_ba01f0a3e0123651915008bc578" PRIMARY KEY ("id")); COMMENT ON COLUMN "message"."id" IS '流水號'; COMMENT ON COLUMN "message"."createdAt" IS '创建时间'; COMMENT ON COLUMN "message"."name" IS '姓名'; COMMENT ON COLUMN "message"."message" IS '留言'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "message"`);
    }

}
