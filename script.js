// --- 1. AIアシスタント機能（疑似シミュレーション） ---
const aiInput = document.querySelector('#ai-assistant input');

aiInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        const text = this.value;
        if (!text) return;

        // 簡易的なAI判定ロジック
        let response = "";
        if (text.includes("敬語")) {
            response = "【AI敬語変換】: 「" + text.replace("敬語", "") + "」→「〜していただけますでしょうか？」";
        } else if (text.includes("計算")) {
            try {
                // evalは簡易的ですが、本番ではmath.jsなどのライブラリ推奨
                response = "【AI計算結果】: " + eval(text.match(/\d+[\+\-\*\/]\d+/)[0]);
            } catch {
                response = "数式が読み取れませんでした。";
            }
        } else {
            response = "【AI回答】: 「" + text + "」について調べますか？（API連携でさらに詳しく返せます）";
        }

        alert(response);
        this.value = '';
    }
});

// --- 2. 単位変換（プロ仕様の土台） ---
function convertUnit(value, type) {
    const units = {
        'length': { 'm': 1, 'km': 1000, 'mm': 0.001, 'mile': 1609.34 },
        'weight': { 'kg': 1, 'g': 0.001, 'lb': 0.453592 }
    };
    // ここにプロ向けの物理単位や数学定数を追加していく
    console.log(`${value}を${type}で計算中...`);
}

// --- 3. ゲーム連携（ボイス設定のプロトタイプ） ---
function updateVoiceProximity(distance) {
    // 距離(distance)に応じて音量を下げるロジック
    const volume = Math.max(0, 1 - (distance / 100));
    console.log(`現在の音量: ${Math.round(volume * 100)}% (反響: ${distance > 50 ? 'ON' : 'OFF'})`);
}
