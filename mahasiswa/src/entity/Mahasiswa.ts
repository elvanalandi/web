import {Role} from './Role';
import BaseUser from './BaseUser';

export default class Mahasiswa extends BaseUser{
    public nim = 0;
    public role: Role = Role.ROLE_USER;
}