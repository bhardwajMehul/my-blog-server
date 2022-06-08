import { BaseCommand } from '@adonisjs/core/build/standalone'
import Knex from 'knex'
import Config from '@ioc:Adonis/Core/Config'
import Env from '@ioc:Adonis/Core/Env'

export default class DbDrop extends BaseCommand {
  /**
   * Command name is used to run the command
   */
  public static commandName = 'db:drop'

  /**
   * Command description is displayed in the "help" output
   */
  public static description = 'Drops database if exists.'

  public static settings = {
    /**
     * Set the following value to true, if you want to load the application
     * before running the command. Don't forget to call `node ace generate:manifest`
     * afterwards.
     */
    loadApp: true,

    /**
     * Set the following value to true, if you want this command to keep running until
     * you manually decide to exit the process. Don't forget to call
     * `node ace generate:manifest` afterwards.
     */
    stayAlive: false,
  }

  public async run() {
    const dbConfig = Config.get('database.connections')[Env.get('DB_CONNECTION')]
    try {
      const knex = Knex(dbConfig)
      await knex.raw(`DROP DATABASE IF EXISTS ${Env.get('MYSQL_DB_NAME')}`)
      await knex.destroy()
    } catch (e) {
      this.logger.error(e)
    }
  }
}
