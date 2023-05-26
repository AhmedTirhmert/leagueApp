import {
  Controller,
  Get,
  Param,
  Post,
  // Body,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { ChampionsService } from './champions.service';
import { FileInterceptor } from '@nestjs/platform-express';
import sharp from 'sharp';
// import { CreateChampionDto } from './dto/create-champion.dto';
// import { UpdateChampionDto } from './dto/update-champion.dto';

@Controller('champions')
export class ChampionsController {
  constructor(private readonly championsService: ChampionsService) {}

  @Get('all')
  async getAll() {
    return await this.championsService.getAll();
  }

  @Get(':name')
  findOne(@Param('name') name: string) {
    return this.championsService.getByName(name);
  }
  @Post('testing')
  @UseInterceptors(FileInterceptor('file'))
  async testing(@UploadedFile() file: any) {
    const scallDownBy = 230;
    const inputPadding = scallDownBy / 2;
    try {
      const template = 'assets/images/template.png';
      const templateMetadata = await sharp(template).metadata();
      const inputFile = await sharp(file.buffer)
        .resize({
          width: templateMetadata.width - scallDownBy,
          height: templateMetadata.height - scallDownBy,
        })
        .toBuffer();
      const composition = await sharp(template)
        .composite([
          { input: inputFile, top: inputPadding, left: inputPadding },
        ])
        .toFile('assets/images/tempFile.png');
      return {
        composition,
      };
    } catch (error) {
      console.log('ERROR => ', error);
    }
  }
  // @Post()
  // create(@Body() createChampionDto: CreateChampionDto) {
  //   return this.championsService.create(createChampionDto);
  // }

  // @Patch(':id')
  // update(
  //   @Param('id') id: string,
  //   @Body() updateChampionDto: UpdateChampionDto,
  // ) {
  //   return this.championsService.update(+id, updateChampionDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.championsService.remove(+id);
  // }
}
