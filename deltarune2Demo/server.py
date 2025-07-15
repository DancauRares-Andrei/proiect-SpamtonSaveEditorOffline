import http.server
import socketserver
import os
import urllib.parse

ROOT_DIRECTORY = r"/home/rares/Descărcări/SpamtonSaveFIleEditor/Demo_Chapter2"
PORT = 8080

class CustomHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        if self.path == "/":
            self.path = "/index.html"
        
        file_path = os.path.join(ROOT_DIRECTORY, self.path.lstrip('/').split('?')[0])
        print(file_path)
        
        if os.path.exists(file_path) and os.path.isfile(file_path):
            self.send_response(200)
            self.send_header("Content-type", self.get_content_type(file_path))
            self.end_headers()
            with open(file_path, "rb") as file:
                self.wfile.write(file.read())
        else:
            self.send_error(404, "Fișierul nu a fost găsit.")

    def do_POST(self):
        if self.path == "/deltarune2Demo/savefile/update":
            content_length = int(self.headers['Content-Length'])
            post_data = self.rfile.read(content_length).decode('utf-8')
            form_data = urllib.parse.parse_qs(post_data)

            input_file = os.path.join(ROOT_DIRECTORY, "filech2_0_demo")
            if not os.path.exists(input_file):
                self.send_error(500, "Fișierul original filech2_0_demo nu există.")
                return 
            with open(input_file, "r") as f:
                lines = f.readlines()

            for key, value_list in form_data.items():
                if key.startswith("_") and value_list:
                    try:
                        line_index = int(key[1:])-1  # elimină "_" și convertește la int
                        value = value_list[0]
                        lines[line_index] = f"{value}\n"
                    except ValueError:
                        continue  # ignoră cheile nevalide

            # Scrie fișierul
            file_path = "./filech2_0"  # Scriem într-un path temporar
            with open(file_path, "w") as f:
                f.writelines(lines)

            # Trimite fișierul spre descărcare
            self.send_response(200)
            self.send_header("Content-Type", "application/octet-stream")
            self.end_headers()
            with open(file_path, "rb") as f:
                self.wfile.write(f.read())
        else:
            self.send_error(404, "Endpoint necunoscut.")

    def get_content_type(self, file_path):
        ext = os.path.splitext(file_path)[1].lower()
        return {
            ".html": "text/html",
            ".css": "text/css",
            ".js": "application/javascript",
            ".json": "application/json",
            ".jpg": "image/jpeg",
            ".png": "image/png",
            ".gif": "image/gif",
            ".txt": "text/plain",
            ".ttf": "font/ttf",
            ".wasm": "application/wasm"
        }.get(ext, "application/octet-stream")

if __name__ == "__main__":
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(("", PORT), CustomHandler) as httpd:
        print(f"Serverul a pornit. Ascultă pe http://localhost:{PORT}/")
        httpd.serve_forever()

