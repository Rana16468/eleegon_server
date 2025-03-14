
import { Injectable } from '@nestjs/common';

export interface FaceData {
  name: string;
  age: number;
  
}

@Injectable()
export class AppService {
  getHello(): string {
    return 'The quick brown fox';
  }

  getFaceData(): FaceData { 
    const data: FaceData = {
      name: "Sohel Rana",
      age: 25
    };

    return data; 
  }
}
