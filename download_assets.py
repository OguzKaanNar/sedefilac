import os
import urllib.request
import urllib.parse
from html.parser import HTMLParser

class ImageParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.images = []
    
    def handle_starttag(self, tag, attrs):
        if tag == 'img':
            for attr in attrs:
                if attr[0] == 'src':
                    self.images.append(attr[1])

if __name__ == "__main__":
    url = "https://sedefilac.com/"
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    try:
        html = urllib.request.urlopen(req).read().decode('utf-8')
        parser = ImageParser()
        parser.feed(html)
        
        os.makedirs(r"c:\Users\harec\sedefilac\assets", exist_ok=True)
        for img_url in set(parser.images):
            full_url = urllib.parse.urljoin(url, img_url)
            filename = os.path.basename(urllib.parse.urlparse(full_url).path)
            if not filename:
                continue
            save_path = os.path.join(r"c:\Users\harec\sedefilac\assets", filename)
            try:
                print(f"Downloading {full_url}")
                
                req_img = urllib.request.Request(full_url, headers={'User-Agent': 'Mozilla/5.0'})
                with urllib.request.urlopen(req_img) as response, open(save_path, 'wb') as out_file:
                    out_file.write(response.read())
            except Exception as e:
                print(f"Failed to download {full_url}: {e}")
    except Exception as e:
        print(f"Failed to fetch {url}: {e}")
