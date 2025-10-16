async function chargerCitation() {
      const el = document.getElementById('citation');
      el.innerText = "Chargement..."

        const target = 'https://zenquotes.io/api/random';
        const proxy = 'https://api.allorigins.win/raw?url=';
        const url = proxy + encodeURIComponent(target) + ?cachebuster=${Date.now()};

        const resp = await fetch(url);
        const data = await resp.json();
        el.textContent = ${data[0].q} — ${data[0].a};
    }

    document.addEventListener('DOMContentLoaded', () => {
      document.getElementById('nouvelle').addEventListener('click', chargerCitation);
      chargerCitation(); // charge une citation au démarrage
    });
