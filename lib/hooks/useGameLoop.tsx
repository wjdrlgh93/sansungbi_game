// game main 
"use client"
import { WordEntity } from "@/types";
import { useCallback, useEffect, useRef, useState } from "react";


const GAME_SPEED_MS= 50;
const SPAWN_RATE = 0.02;
const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

interface GameState {
    activeWords: WordEntity[];
    score: number;
    lives: number;
    isPlaying: boolean;
}


export const useGameLoop = (dictionary: string[]) => {

    // manageState 
    // const [activeWords, setActiveWords] = useState<WordEntity[]>([]);
    // const [score, setScore] = useState(0);
    // const [lives, setLives] = useState(5);
    // const [isPlaying, setIsPlaying] = useState(false);
    const [gameState, setGameState] = useState<GameState>({
        activeWords: [],
        score: 0, 
        lives: 5,
        isPlaying: false,
    });

    // useRef :: block Stale Closure 
    const dictionaryRef = useRef(dictionary);

    // update 
    useEffect(()=>{
        dictionaryRef.current = dictionary;
    },[dictionary])

    // startUp game function 
  const startGame = () => {
    setGameState({
      activeWords: [],
      score: 0,
      lives: 5,
      isPlaying: true,
    });
  };

    const removedWord = useCallback((text: string) =>{
        let success = false;

        setGameState((prev) => {
        const targetIndex = prev.activeWords.findIndex((w) => w.text === text);
        if (targetIndex !== -1) {
            success = true;
           
            const newWords = [...prev.activeWords];
            newWords.splice(targetIndex, 1);
            return {
            ...prev,
            activeWords: newWords,
            score: prev.score + 10,
        };
      }
      return prev;
    });

    return success; 
  }, []);

    // main Loop 
  useEffect(() => {
    if (!gameState.isPlaying) return;

    const tick = setInterval(() => {
      setGameState((prev) => {
        const movedWords = prev.activeWords.map((w) => ({
          ...w,
          y: w.y + w.speed,
        }));


        const survivingWords: WordEntity[] = [];
        let lifeLostCount = 0; 

        movedWords.forEach((w) => {
          if (w.y > GAME_HEIGHT) {
            lifeLostCount = 1; 
          } else {
            survivingWords.push(w);
          }
        });

        const newLives = prev.lives - lifeLostCount;
        const isGameOver = newLives <= 0;

        if (!isGameOver && Math.random() < SPAWN_RATE && survivingWords.length < 10) {
           const randomWord = dictionaryRef.current[Math.floor(Math.random() * dictionaryRef.current.length)];
           if (randomWord) {
             survivingWords.push({
               id: Date.now() + Math.random(), // ID 중복 방지
               text: randomWord,
               x: Math.random() * (GAME_WIDTH - 100),
               y: 0,
               speed: 2 + Math.random() * 2,
             });
           }
        }


        return {
          ...prev,
          activeWords: survivingWords,
          lives: Math.max(0, newLives), 
          isPlaying: !isGameOver,
        };
      });
    }, GAME_SPEED_MS);

    return () => clearInterval(tick);
  }, [gameState.isPlaying]);

  return { 
    activeWords: gameState.activeWords, 
    score: gameState.score, 
    lives: gameState.lives, 
    isPlaying: gameState.isPlaying, 
    startGame, 
    removedWord 
  };
};