import { count } from "console";

interface DatamuseWord{
    word: string;
    score: number;
}

export const fetchTechWords = async (count:number = 50): Promise<string[]> => {
    try{
        const response = await fetch (`https://api.datamuse.com/words?ml=computer&max=${count}`);
        if(!response.ok){
            throw new Error("Failed to fetch words");
        }
        const data: DatamuseWord[] = await response.json();

        const wordList = data 
            .map((item)=> item.word)
            .filter((word) => !word.includes(" "))
            .filter((word) => word.length > 3);
        return wordList;

    } catch(err) {
        console.error("API ERROR, using backup :", err);
        return ["react", "nextjs", "coding", "server", "debug", "deployment"];
    }
};