"use client"

import { useGameLoop } from '@/lib/hooks/useGameLoop';
import { fetchTechWords } from '@/lib/word-service';
import GameOverModal from '@/components/GameOverModal';
import React, { useEffect, useRef, useState } from 'react';
import styles from "./game.module.css";
import { saveLocalScore } from '@/lib/stroge';
import { start } from 'repl';

export function Page() {
    // prepare WordData 
    const [dictionary, setDictionary] = useState<string[]>([]);
    const [loading, setLoading] = useState(true);

    // connectMainGameEngine(usetGameLoop)
    const {activeWords, score ,lives, isPlaying, startGame, removedWord} = 
            useGameLoop(dictionary);
    // userInputState 
    const [inputValue, setInputValue] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);


    useEffect(()=>{
        setLoading(true);
        fetchTechWords(50)
            .then((words)=>{
                setDictionary(words);
                setLoading(false);
            });
    },[]);

    // during game. keep live focus...
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) =>{
        if(e.key === "Enter"){
            e.preventDefault();
            const targetWord = inputValue.trim();
            const success = removedWord(targetWord);

            setInputValue("");
        
            }
        };

        const isGameOver = !isPlaying && lives <=0 && !loading;

        // // HTML // //
        return(
        <div className={styles.container}> 
            {}
            <div className={styles.hud}>
                 <div>SCORE:<span className={styles.scoreValue}>{score}</span></div>
                 {}
                 <div>LIVES:<span className={styles.livesValue}>{"♥".repeat(Math.max(0, lives))}</span></div>
            </div>
            {}
            <div className={styles.board}>
    
                {loading && (
                    <div className={`${styles.overlay} ${styles.startScreen}`}>
                        <h2 className={styles.title}>LOADING...</h2>
                    </div>
                )}

                {}
                {!loading && !isPlaying && lives === 5 && (
                    <div className={`${styles.overlay} ${styles.startScreen}`}>
                        <h1 className={styles.title}>산성비</h1>
                        <p className={styles.description}>단어가 바닥에 닿기전에 입력해서 없애주세요!</p>
                        <button onClick={startGame} className={`${styles.button} ${styles.startButton}`}>
                            START GAME
                        </button>
                    </div>
                )}

                {}
                {!isPlaying && lives <= 0 && (
                    <div className={`${styles.overlay} ${styles.gameOverScreen}`}>
                        <h2 className={styles.title}>GAME OVER</h2>
                        <p className={styles.description}>Final Score: {score}</p>
                        <button onClick={startGame} className={`${styles.button} ${styles.retryButton}`}>
                            TRY AGAIN
                        </button>
                    </div>
                )}

                {}
                {activeWords.map((word)=>(
                    <div 
                        key={word.id}
                        className={styles.word}
                        style={{
                            left: `${word.x}px`,
                            top: `${word.y}px`,
                            transition: 'top 0.05s linear', 
                        }}  
                    > {word.text}
                    </div>
                ))}
            </div>
            {}
            <div className={styles.inputContainer}>
                <input
                    ref={inputRef}
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="떨어지는 내용을 입력하세요"
                    disabled={!isPlaying}
                    className={styles.input}
                />
                <p className={styles.guideText}>
                    PRESS [ENTER] to fire / Focus is automatic
                </p>
            </div>
        {/* 게임 상태가 'OVER'일 때만 모달 띄우기 */}
        {isGameOver && (
            <GameOverModal score={score} onRestart={startGame}/>
        )}
        </div>
        );


    }



export default Page;