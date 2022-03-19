import os, sys
import requests

query_args = sys.argv[1:]

API_KEY = open("API_KEY.txt").read()

query_url = f'https://www.googleapis.com/youtube/v3/search?part=snippet&q={" ".join(query_args)}&key={API_KEY}'

res = requests.get(query_url)
res_data = res.json()

num_items = len(res_data['items'])
res_items = res_data['items'][:max(num_items, 10)]
item_id = [i['id']['videoId'] for i in res_items]

item_titles = [i['snippet']['title'] for i in res_items]

for i in range(len(res_items)):
    print(f"[{i+1}] {item_titles[i]}")

choice = int(input("Please enter a choice: "))-1
vid_link = f"https://youtube.com/watch?v={item_id[choice]}" 
os.system(f"youtube-dl -o - {vid_link} | mpv -")