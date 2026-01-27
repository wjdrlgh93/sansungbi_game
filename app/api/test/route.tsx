import { NextResponse } from 'next/server';
import connectDB from '@/lib/db'; // 방금 만든 db 연결 함수 불러오기

export async function GET() {
  try {
    console.log("🔌 DB 연결 시도 중...");
    await connectDB(); // 여기서 DB 연결을 시도합니다.
    console.log("✅ DB 연결 성공!");
    
    return NextResponse.json({ status: '성공', message: 'MongoDB 연결 완료!' });
  } catch (error) {
    console.error("❌ DB 연결 실패:", error);
    return NextResponse.json({ status: '실패', error: '터미널 로그를 확인하세요.' }, { status: 500 });
  }
}