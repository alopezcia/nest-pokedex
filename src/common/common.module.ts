import { Module } from '@nestjs/common';
import { AxiosAdapter } from './adapters/axisos.adapter';

@Module({
    providers:[ AxiosAdapter ],
    exports: [ AxiosAdapter ]
})
export class CommonModule {}
