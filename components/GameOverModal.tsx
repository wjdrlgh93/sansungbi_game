'use Client';

import { useState } from "react";

interface Props{
    score: number;
    onRestart: ()=> void;
}

export default function GameOberModal({score, onRestart}: Props){
    const [nickname,setNickName] = useState('');
    const [isSaving, setIsSaving] = useState(false);
    const [isSaved, setIsSaved] = useState(false);

    const handleSave = async () => {
        if(!nickname.trim())
            return alert('이름을 입력해주세요');

        setIsSaving(true);

        try{
            const res = await fetch('/api/ranking',{
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ nickname, score }),
            });

            if(res.ok){
                setIsSaved(true);
                alert('점수가 저장되었습니다☆');
            } else {
                alert('저장에 실패하였습니다');
            }
        } catch(error){
            console.error(error);
            alert('오류가 발생했습니다.');
        } finally {
            setIsSaving(false);
        }
    };

    // // // // //
    return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
      <div className="bg-white text-black p-8 rounded-lg w-[90%] max-w-sm text-center shadow-xl">
        <h2 className="text-3xl font-bold mb-4 text-red-600">GAME OVER</h2>
        <p className="text-xl mb-6">최종 점수: <span className="font-bold">{score}점</span></p>

        {!isSaved ? (
          /* 저장하기 전: 입력 폼 보여주기 */
          <div className="flex flex-col gap-3 mb-6">
            <input
              type="text"
              placeholder="이니셜 3자리 (예: KJH)"
              maxLength={3}
              value={nickname}
              onChange={(e) => setNickName(e.target.value.toUpperCase())} // 대문자 자동 변환
              className="border-2 border-gray-300 p-3 rounded text-center text-lg font-bold"
              disabled={isSaving}
            />
            <button
              onClick={handleSave}
              disabled={isSaving}
              className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded font-bold transition-colors"
            >
              {isSaving ? '저장 중...' : '랭킹에 등록하기'}
            </button>
          </div>
        ) : (
          /* 저장 완료 후: 메시지 보여주기 */
          <div className="mb-6 text-green-600 font-bold text-lg">
             ✅ 기록이 안전하게 저장되었습니다!
          </div>
        )}

        <div className="flex gap-2">
          <button
            onClick={onRestart}
            className="flex-1 bg-gray-600 hover:bg-gray-700 text-white py-3 rounded font-bold"
          >
            다시 하기
          </button>
          {/* 랭킹 페이지 버튼 (나중에 만드시면 주석 해제) */}
          {/* <button className="flex-1 bg-yellow-500 text-white rounded font-bold">랭킹 보기</button> */}
        </div>
      </div>
    </div>
  );
}
