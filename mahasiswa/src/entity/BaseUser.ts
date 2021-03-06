import User from './User';
import {Role} from './Role';

export default abstract class BaseUser implements User{
    public id: number = 0;
    public nama = "";
    public abstract role: Role;
}