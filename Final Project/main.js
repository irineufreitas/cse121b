document.getElementById('searchButton').addEventListener('click', async () => {
    const searchInput = document.getElementById('searchInput').value.trim();
    if (searchInput !== '') {
        const videos = await searchYouTubeVideos(searchInput);
        displayYouTubeVideos(videos);
    } else {
        alert('Please enter a topic or keyword.');
    }
});

async function searchYouTubeVideos(keyword) {
    const apiKey = 'AIzaSyDkgD9LVjjFUOih4bFUKMkIxdTKIGC2TEU';
    const apiUrl = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&part=snippet&q=${encodeURIComponent(keyword)}&type=video`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Failed to search for videos');
        }
        const data = await response.json();
        return data.items.map(item => ({
            title: item.snippet.title,
            videoId: item.id.videoId
        }));
    } catch (error) {
        console.error('Error searching YouTube videos:', error);
        return [];
    }
}

function displayYouTubeVideos(videos) {
    const videoContainer = document.getElementById('videos');
    videoContainer.innerHTML = '';
    if (videos.length === 0) {
        videoContainer.textContent = 'No videos found.';
    } else {
        videos.forEach((video, index) => {
            const videoDiv = document.createElement('div');
            videoDiv.classList.add('video-container');
            const videoTitle = document.createElement('div');
            videoTitle.classList.add('video-title');
            videoTitle.textContent = video.title;
            const iframe = document.createElement('iframe');
            iframe.src = `https://www.youtube.com/embed/${video.videoId}`;
            iframe.title = video.title;
            iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
            iframe.setAttribute('allowfullscreen', '');
            videoDiv.appendChild(videoTitle);
            videoDiv.appendChild(iframe);
            videoContainer.appendChild(videoDiv);
        });
    }
}

document.getElementById('randomButton').addEventListener('click', async () => {
    const randomTopics = ['music', 'dance', 'travel', 'food', 'technology'];
    const randomIndex = Math.floor(Math.random() * randomTopics.length);
    const randomTopic = randomTopics[randomIndex];
    const videos = await searchYouTubeVideos(randomTopic);
    displayYouTubeVideos(videos);
});
