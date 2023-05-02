const url = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCtT0Xtqo_7Pp7LtAOrtCOXA&part=snippet%2Cid&order=date&maxResults=10';
const content = null || document.getElementById('content');

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'c09686edefmshb76bd17fb977d2ep1a0171jsnda9a2d162300',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};


async function fetchData(url, options) {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
}

(async () => {
    try {
        const videos = await fetchData(url, options);
        console.log(videos);
        let view = `
        ${videos.items.map(video => `
           <div class="group relative">
                <div
                    class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                    <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
                </div>
                <div class="mt-4 flex justify-between">
                    <h3 class="text-sm text-gray-700">
                        <span aria-hidden="true" class="absolute inset-0"></span>
                        ${video.snippet.title}
                    </h3>
                </div>
            </div>`
        ).slice(0, 1).join('')}`
        content.innerHTML = view;
    } catch (error) {
        console.log(error);
    }
})();