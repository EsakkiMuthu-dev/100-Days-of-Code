const ffmpeg = require('fluent-ffmpeg');
const ffmpegStatic = require('ffmpeg-static-electron');

ffmpeg.setFfmpegPath(ffmpegStatic.path);

function generateVideoClip(inputFilePath, outputFilePath, startTime, duration) {
    ffmpeg(inputFilePath)
        .setStartTime(startTime)
        .setDuration(duration)
        .on('end', () => console.log('Finished processing'))
        .on('error', (err) => console.error('Error:', err))
        .save(outputFilePath);
}

// Example usage
const inputVideo = '/home/spidy/Videos/Ant-Man.and.the.Wasp.Quantumania.2023.720p.10bit.WEBRip.6CH.x265.HEVC-PSA.mkv';
const outputClip = '/home/spidy/Documents/GitHub/100-Days-of-Code/Day 88/temp/';
const startTimeInSeconds = 10;
const clipDurationInSeconds = 20;

generateVideoClip(inputVideo, outputClip, startTimeInSeconds, clipDurationInSeconds);
