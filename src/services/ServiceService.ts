import API from "../API";
import { IBaseService } from "./IBaseService";

export class ServiceService implements IBaseService {

  create(entity: object): Promise<object> {
    return API.entityRepository.create('services', entity);
  }
  
  modify(oldEntity: object, newEntity: object): Promise<object> {
    return API.entityRepository.modify('services', oldEntity, newEntity);
  }

  delete(entityId : string) : Promise<object> {
    return API.entityRepository.delete('services', entityId);
  }

  get(filter: object, projection: object): Promise<object[]> {
    return API.entityRepository.get('services', filter, projection);
  }
}