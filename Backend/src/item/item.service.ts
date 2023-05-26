import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class ItemService {
  private riotUrl = 'http://ddragon.leagueoflegends.com/cdn/13.7.1/data/en_US';

  async getAll() {
    try {
      const url = `${this.riotUrl}/item.json`;
      const {
        data: { data },
      } = await axios.get(url);
      return data;
    } catch (error) {
      console.log(error);
      throw new HttpException(
        'Something Went Wrong',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async getById(id: string) {
    try {
      const url = `${this.riotUrl}/item.json`;
      const {
        data: { data },
      } = await axios.get(url);
      return data[id];
    } catch (error) {
      console.log(error);
      throw new HttpException(
        'Something Went Wrong',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
