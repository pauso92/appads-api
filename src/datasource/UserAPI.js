import { DataSource } from "apollo-datasource";
import { config } from "dotenv/types";
import { hash } from "bcrypt";

export default class UserAPI extends DataSource {
    saltRounds = 10;

    constructor({ store }) {
        super()
        this.store = store
    }

    initialize(config) {
        this.contex = config.contex
    }

    async createUser({ name, email, password }) {
        const result = await this.store.Users.create({
            name,
            email,
            password: await hash(password, this.saltRounds)
        })
        return result
    }
}