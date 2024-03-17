import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

@Injectable()
export class TypeormConfig implements TypeOrmOptionsFactory {
  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'mysql', // DB 종류
      host: 'localhost', //데이터베이스 서버 호스트
      port: 3306, // 데이터베이스 포트
      username: 'root',
      password: 'test1234',
      database: 'movie',
      synchronize: true, // 스키마 자동 동기화, production에서는 false,
      dropSchema: false, // 애플리케이션 실행시 기존 스키마 삭제 여부
      keepConnectionAlive: true, // 애플리케이션 재시작 시 연결 유지
      logging: true,
      entities: [`${__dirname}/../**/*.entity{.ts,.js}`], // 중요! 엔티티 클래스 경로
      extra: {
        max: 100,
      },
      namingStrategy: new SnakeNamingStrategy(),
    } as TypeOrmModuleOptions;
  }
}
