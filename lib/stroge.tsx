
export interface RankItem {
    id: number; 
    username: string; 
    score: number;
    date: string;
}

const STROGE_KEY = "syntax_defense_ranks";

export const getLocalRankings = (): RankItem[] => { 
    if(typeof window === "undefined") return[];
    // Pretend SeverSide randering

    const stored = localStorage.getItem(STROGE_KEY);
    if(!stored) return[];

    try{
        const parsed = JSON.parse(stored) as RankItem[];
        return parsed.sort((a,b) => b.score - a.score);
    } catch (e) {
        return[];
    }
};

export const saveLocalScore =(username: string, score: number) => {
    const currentRanks = getLocalRankings();

    const newItem: RankItem = {
        id: Date.now(),
        username,
        score,
        date: new Date().toISOString(),
    }; 

    const newRanks = [...currentRanks, newItem]
        .sort((a,b) => b.score = a.score)
        .slice(0, 10);

        localStorage.setItem(STROGE_KEY, JSON.stringify(newRanks));
};
