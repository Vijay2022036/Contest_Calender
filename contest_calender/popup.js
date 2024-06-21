document.addEventListener('DOMContentLoaded', async () => {
    const contestList = document.getElementById('contestList');
    const username = 'vijay_15'; 
    const apiKey = '28da2af526543f84790273fabdd5578cc7262cd7'; 
    const apiUrl = `https://clist.by:443/api/v4/contest/?upcoming=true&resource=codeforces.com,codechef.com,leetcode.com&username=${username}&api_key=${apiKey}&end_time__during=7days&limit=5`;
    
    const resourceLogos = {
        'codeforces.com': 'logos/codeforces-logo.png',
        'codechef.com': 'logos/codechef-logo.png',
        'leetcode.com': 'logos/leetcode-logo.png'
    };

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            if (response.status === 401) {
                throw new Error('Unauthorized: Please check your API credentials.');
            } else {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
        }
        
        const data = await response.json();
        
        if (!data.objects || data.objects.length === 0) {
            contestList.textContent = 'No upcoming contests found.';
            return;
        }

        data.objects.sort((a, b) => new Date(a.start) - new Date(b.start));

        data.objects.forEach(contest => {
            const contestDiv = document.createElement('div');
            contestDiv.className = 'contest';

            const logo = document.createElement('img');
            logo.className = 'contest-logo';
            logo.src = resourceLogos[contest.resource];
            logo.alt = contest.resource;
            logo.width = 24;
            logo.height = 24;

            const title = document.createElement('div');
            title.className = 'contest-title';
            title.innerHTML = contest.event;
            
            const time = document.createElement('div');
            time.className = 'contest-time';
            time.textContent = new Date(contest.start).toLocaleString();
            
            const link = document.createElement('a');
            link.href = contest.href;
            link.target = '_blank';
            link.className = 'contest-link';
            link.textContent = 'Go to Contest';

            contestDiv.appendChild(logo);
            contestDiv.appendChild(title);
            contestDiv.appendChild(time);
            contestDiv.appendChild(link);
            
            contestList.appendChild(contestDiv);
        });
    } catch (error) {
        console.error('Error fetching contest data:', error);
        contestList.textContent = `Failed to load contests: ${error.message}`;
    }
});
