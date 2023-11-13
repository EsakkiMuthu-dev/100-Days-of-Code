const ffmpeg = require('fluent-ffmpeg');

// Input movie file path
const inputFilePath = '/home/spidy/Videos/Ant-Man.and.the.Wasp.Quantumania.2023.720p.10bit.WEBRip.6CH.x265.HEVC-PSA.mkv';

// Output sample video file path
const outputFilePath = './sample-video.mp4';

// Set random start time within the first 30 seconds
const startTime = Math.floor(Math.random() * 30);

// Create FFmpeg command
const command = ffmpeg(inputFilePath)
  .seekInput(startTime)  // Set the start time
  .duration(45)          // Set the duration of the sample video (45 seconds in this example)
  .output(outputFilePath) // Set the output file path
  .on('end', () => {
    console.log('Sample video generated successfully!');
  })
  .on('error', (err) => {
    console.error('Error generating sample video:', err);
  });

// Run the FFmpeg command
command.run();
