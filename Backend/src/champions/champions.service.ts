import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateChampionDto } from './dto/create-champion.dto';
import { UpdateChampionDto } from './dto/update-champion.dto';
import axios from 'axios';

@Injectable()
export class ChampionsService {
  private riotUrl = 'http://ddragon.leagueoflegends.com/cdn/13.7.1/data/en_US';
  // create(createChampionDto: CreateChampionDto) {
  //   return 'This action adds a new champion';
  // }

  async getAll() {
    try {
      const url = `${this.riotUrl}/champion.json`;
      const {
        data: { data },
      } = await axios.get(url);
      console.log(Object.keys(data));
      return data;
    } catch (error) {
      console.log(error);
      throw new HttpException(
        'Something Went Wrong',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async getByName(name: string) {
    try {
      const url = `${this.riotUrl}/champion/${name}.json`;
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

  // update(id: number, updateChampionDto: UpdateChampionDto) {
  //   return `This action updates a #${id} champion`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} champion`;
  // }
}
