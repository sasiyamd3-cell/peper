const apiUrl = 'https://api.zanta-mini.store/api/paper/search?apiKey=zanta_hjLBxGQQOA9GpTaicPJP17Kn&url=maths';

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const div = document.getElementById('results');
        div.innerHTML = '';
        data.forEach(paper => {
            div.innerHTML += `
                <div class="paper-item">
                    <h3>${paper.title}</h3>
                    <a href="${paper.link}" target="_blank">බාගත කරන්න</a>
                </div>`;
        });
    })
    .catch(err => {
        document.getElementById('results').innerText = "දත්ත ලබා ගැනීමේ දෝෂයක්.";
    });
