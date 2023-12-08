import os
from moviepy.editor import VideoFileClip
import multiprocessing

def generate_sample_video(args):
    input_path, output_path, start_time, duration = args
    try:
        video = VideoFileClip(input_path)
        subclip = video.subclip(start_time, start_time + duration)
        subclip.write_videofile(output_path, codec='libx265', audio_codec='aac')
        print("Video processing completed successfully.")
    except Exception as e:
        print(f"Error during video processing: {e}")

if __name__ == "__main__":
    input_video = "/home/spidy/Videos/Ant-Man.and.the.Wasp.Quantumania.2023.720p.10bit.WEBRip.6CH.x265.HEVC-PSA.mkv"
    output_clip = os.path.join("/home/spidy/Documents/GitHub/100-Days-of-Code/Day 88/py", "output-clip.mp4")
    start_time_in_seconds = 10
    clip_duration_in_seconds = 20

    num_processes = multiprocessing.cpu_count()
    pool = multiprocessing.Pool(processes=num_processes)

    args_list = [(input_video, output_clip, start_time_in_seconds, clip_duration_in_seconds)] * num_processes

    pool.map(generate_sample_video, args_list)
    pool.close()
    pool.join()
