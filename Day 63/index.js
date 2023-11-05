function getYouTubeID(url) {
    let videoId = "";
    const pattern = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(pattern);

    if (match && match[1]) {
        videoId = match[1];
    }

    return videoId;
}

const url1 = "https://www.youtube.com/watch?v=ATXTY-8wwvE";
const url="https://youtu.be/ATXTY-8wwvE?si=Ox3qTWH7n8iqiMz4";
const videoId = getYouTubeID(url);
console.log(videoId);
const videoId1 = getYouTubeID(url1);
console.log(videoId1);
console.log(videoId === videoId1);