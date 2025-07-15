import http.server
import socketserver
import os
import urllib.parse
import json

ROOT_DIRECTORY = r"./"
PORT = 8080

class CustomHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        if self.path == "/":
            self.path = "./index.html"
        
        file_path = os.path.join(ROOT_DIRECTORY, self.path.lstrip('/').split('?')[0])
        print(f"[GET] {file_path}")
        
        if os.path.exists(file_path) and os.path.isfile(file_path):
            self.send_response(200)
            self.send_header("Content-type", self.get_content_type(file_path))
            self.end_headers()
            with open(file_path, "rb") as file:
                self.wfile.write(file.read())
        else:
            self.send_error(404, "Fișierul nu a fost găsit.")

    def do_POST(self):
        content_length = int(self.headers.get('Content-Length', 0))
        content_type = self.headers.get('Content-Type')
        raw_post_data = self.rfile.read(content_length)

        print(f"[POST] Path: {self.path}")
        print(f"Content-Type: {content_type}")

        response_data = {}

        if self.path == "/deltarune1DemoEdit.html":
            try:
                # Inițializare goală
                post_data = {}

                # Suportăm doar application/x-www-form-urlencoded deocamdată
                if content_type == "application/x-www-form-urlencoded":
                    post_data = urllib.parse.parse_qs(raw_post_data.decode("utf-8"))
                    
                    # Procesare: validare lungime totală
                    total_lines = sum(value[0].count('\n') + 1 for key, value in post_data.items())
                    print(f"Număr total de linii: {total_lines}")

                    if total_lines > 3000:
                        response_data = {"err": f"Invalid Length, detected {total_lines} lines"}
                    else:
                        response_data = {"url": "/deltarune1Demo/savefile/update"}
                else:
                    response_data = {"err": f"Unsupported content type: {content_type}"}

            except Exception as e:
                response_data = {"err": f"Server error: {str(e)}"}

            self.send_response(200)
            self.send_header("Content-Type", "application/json")
            self.end_headers()
            self.wfile.write(json.dumps(response_data).encode("utf-8"))
        else:
            self.send_error(404, "Endpoint necunoscut.")


    def get_content_type(self, file_path):
        if file_path.endswith(".html"):
            return "text/html"
        elif file_path.endswith(".js"):
            return "application/javascript"
        elif file_path.endswith(".css"):
            return "text/css"
        elif file_path.endswith(".json"):
            return "application/json"
        elif file_path.endswith(".png"):
            return "image/png"
        elif file_path.endswith(".jpg") or file_path.endswith(".jpeg"):
            return "image/jpeg"
        elif file_path.endswith(".gif"):
            return "image/gif"
        else:
            return "application/octet-stream"

if __name__ == "__main__":
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(("", PORT), CustomHandler) as httpd:
        print(f"Serverul a pornit. Ascultă pe http://localhost:{PORT}/")
        httpd.serve_forever()

