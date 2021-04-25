import { EntityRepository, Repository } from "typeorm";
import { Connection } from "../entities/Conection";


@EntityRepository(Connection)
class ConnectionRepository extends Repository<Connection>{

}
export{ConnectionRepository};