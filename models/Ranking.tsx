
import mongoose, { Schema, Document, Model } from 'mongoose';
import React from 'react'

export interface IRanking extends Document {
  nickname: string; 
  score: number;
  createAt: Date;
}

const RankingSchema: Schema = new Schema({
  nickname: { type:String, required:true, maxlength:3},
  score: { type:Number, required:true },
  createdAt : { type:Date, default: Date.now },
});

// Next.js는 모델을 자꾸 다시 컴파일하려 하므로, 이미 있으면 기존 것을 씁니다.
const Ranking: Model<IRanking> = 
mongoose.models.Ranking || mongoose.model<IRanking>('Ranking', RankingSchema);

export default Ranking;