import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { parse } from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

@Injectable()
export class ConfigService {
    private readonly envConfig: {[key:string]:string}
    constructor(){
        const env = process.env.NODE_ENV || 'development'
        const envFilePath = `${__dirname}/../../.env.${env}`
        const existsPath = fs.existsSync(envFilePath)
        if(!existsPath){
            console.log(`.env.${process.env.NODE_ENV} no existe`)
            process.exit(0)
        }
        this.envConfig = parse(fs.readFileSync(envFilePath))
    }
    get(key: string):string{
        return this.envConfig[key];
    }
}