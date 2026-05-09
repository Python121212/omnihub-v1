// AI要約や敬語変換のシミュレーション
document.querySelector('#ai-assistant input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        const cmd = this.value;
        alert('AI実行中: ' + cmd + '\n（ここにAPIを連携させます）');
        this.value = '';
    }
});
