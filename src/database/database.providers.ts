import { Inject } from "@nestjs/common";
import { ConfigService } from "src/config/config.service";
import { DataSource } from "typeorm";

export const databaseProvider = [
    {
        provide: 'DATABASE_CONNECTION',
        Inject: [ConfigService],
        useFactory: (config: ConfigService) => {
            const dataSource = new DataSource({
                type: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'postgres',
                password: '1234',
                database: 'back_nest_angular',
            });
            return dataSource.initialize();
        }
    }
];