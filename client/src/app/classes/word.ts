export class Word {
    id: number;
    french: string;
    korean: string;
    type: string;
    example: string;
    conjuration: string;
    themes: string[];
    image: string;

    constructor(french: string, korean: string, type: string, example: string){
        this.french = french;
        this.korean = korean;
        this.type = type;
        this.example = example;
    }
}
