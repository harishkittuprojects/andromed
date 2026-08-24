import http.server
import threading
import os
import sys
import socket

PORT = 3000
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        super().end_headers()

class IPv6HTTPServer(http.server.HTTPServer):
    address_family = socket.AF_INET6

def serve_ipv4(port):
    try:
        httpd4 = http.server.HTTPServer(('0.0.0.0', port), Handler)
        print(f"[IPv4] Serving on http://127.0.0.1:{port}", flush=True)
        httpd4.serve_forever()
    except Exception as e:
        print(f"[IPv4] Error: {e}", flush=True)

def serve_ipv6(port):
    try:
        httpd6 = IPv6HTTPServer(('::1', port), Handler)
        print(f"[IPv6] Serving on http://[::1]:{port} (localhost)", flush=True)
        httpd6.serve_forever()
    except Exception as e:
        print(f"[IPv6] Note: {e}", flush=True)

if __name__ == '__main__':
    t1 = threading.Thread(target=serve_ipv4, args=(PORT,), daemon=True)
    t2 = threading.Thread(target=serve_ipv6, args=(PORT,), daemon=True)
    t1.start()
    t2.start()
    print(f"Andromeda Server Ready at http://localhost:{PORT} and http://127.0.0.1:{PORT}", flush=True)
    print(f"DSA Login: http://localhost:{PORT}/#login", flush=True)
    t1.join()
