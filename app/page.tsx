"use client"
import { getLocalRankings, RankItem } from "@/lib/stroge";
import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {

    const [rankings, setRankings] = useState<RankItem[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        // when component mounted bring data from localStroage
        const data = getLocalRankings();
        setRankings(data);
        setLoading(false);
    },[]);

    return(
       <main className={styles.container}>
      <h1 className={styles.title}>산성비</h1>

      <div className={styles.menu}>
        <Link href="/game" className={styles.startButton}>
          GAME START
        </Link>
      </div>

      <section className={styles.rankSection}>
        <h2 className={styles.rankTitle}>🏆 LOCAL HALL OF FAME</h2>
    {loading ? (
          <div className={styles.loading}>Loading...</div>
        ) : rankings.length > 0 ? (
          <ul className={styles.rankList}>
            {rankings.map((item, index) => (
              <li key={item.id} className={styles.rankItem}>
                <span className={styles.rankRank}>#{index + 1}</span>
                <span className={styles.rankName}>
                   {item.username}
                </span>
                <span className={styles.rankScore}>{item.score} pts</span>
              </li>
            ))}
          </ul>
        ) : (
          <div className={styles.empty}>No records yet. Play now!</div>
        )}
      </section>
    </main>
  );
}
