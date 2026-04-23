function expandDays(str) {
  let result = [];
  str.split(",").forEach(part => {
    if (part.includes("-")) {
      const [start, end] = part.split("-").map(Number);
      for (let i = start; i <= end; i++) result.push(i);
    } else {
      result.push(Number(part));
    }
  });
  return result;
}

const div = document.getElementById("nagira");
const days = expandDays(div.dataset.days);

div.innerHTML = days.map(d => `5/${d} 8:30~17:30`).join("<br>");
