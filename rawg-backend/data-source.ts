import { DataSource } from "typeorm";
import { Game } from "./entities/Game";
import { Genre } from "./entities/Genre";
import { ParentPlatform } from "./entities/ParentPlatform";
import { Store } from "./entities/Store";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3307,
  username: "root",
  password: "123456",
  database: "rawgDatabase",
  entities: [Game, Genre, ParentPlatform, Store],
  synchronize: true,
  logging: true,
  extra: {
    authPlugin: "mysql_native_password",
    ssl: false,
    connectionLimit: 10,
  },
  connectTimeout: 60000,
});
