// 大量入力 → 柳樂の欄に追加する処理
function convertBulk() {
  const text = document.getElementById("bulkInput").value.trim();
  if (!text) return;

  const lines = text.split(/\n/); // 改行で分割
  const box = document.getElementById("nagira"); // 柳樂の欄

  lines.forEach(line => {
    const clean = line.trim();
    if (!clean) return;

    // 重複チェック（同じ行があれば追加しない）
    if (!box.innerHTML.includes(clean)) {
      box.innerHTML += `${clean}<br>`;
    }
  });

  // 入力欄を空にする
  document.getElementById("bulkInput").value = "";
}
