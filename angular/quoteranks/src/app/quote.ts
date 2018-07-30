export class Quote{
    constructor (
        public id: string = null,
        public content: string = '',
        public author: string = '',
        public votes: number = 0,
    ){}
}