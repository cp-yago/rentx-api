import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export default class CreateRentals1603324254237 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'rentals',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'car_id',
            type: 'uuid',
            isNullable: false,
          },
          {
            name: 'client_id',
            type: 'uuid',
            isNullable: false,
          },
          {
            name: 'start_date',
            type: 'timestamp with time zone',
            isNullable: false,
          },
          {
            name: 'end_date',
            type: 'timestamp with time zone',
            isNullable: false,
          },
          {
            name: 'total',
            type: 'decimal',
            precision: 7,
            scale: 2,
            isNullable: false,
          },
        ],
      }),
    );

    await queryRunner.createForeignKey(
      'rentals',
      new TableForeignKey({
        name: 'carInRentalsFK',
        columnNames: ['car_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'cars',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );

    await queryRunner.createForeignKey(
      'rentals',
      new TableForeignKey({
        name: 'userInRentalsFK',
        columnNames: ['client_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'users',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('users', 'userInRentalsFK');
    await queryRunner.dropForeignKey('rentals', 'carInRentalsFK');
    await queryRunner.dropTable('rentals');
  }
}
