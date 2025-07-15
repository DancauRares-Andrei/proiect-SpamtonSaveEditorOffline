import os
import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin, urlparse

def download_file(url, folder):
    # Extrage numele fișierului din URL
    local_filename = os.path.join(folder, os.path.basename(urlparse(url).path))
    
    # Trimite cererea GET pentru fișier
    response = requests.get(url)
    if response.status_code == 200:
        with open(local_filename, 'wb') as f:
            f.write(response.content)
            print(f"Descărcat: {local_filename}")
    else:
        print(f"Nu am putut descărca {url}")

def download_resources(page_url):
    # Crează un folder pentru a salva resursele
    folder = 'downloaded_resources'
    if not os.path.exists(folder):
        os.makedirs(folder)

    # Obține conținutul paginii HTML
    response = requests.get(page_url)
    if response.status_code != 200:
        print(f"Nu am putut încărca pagina: {page_url}")
        return

    # Parsează pagina HTML cu BeautifulSoup
    soup = BeautifulSoup(response.text, 'html.parser')

    # Găsește toate resursele de tip imagini, CSS, JS
    resources = []

    # Imagini
    for img_tag in soup.find_all('img', src=True):
        resources.append(img_tag['src'])

    # CSS
    for link_tag in soup.find_all('link', href=True):
        if 'stylesheet' in link_tag.get('rel', []):
            resources.append(link_tag['href'])

    # Scripturi
    for script_tag in soup.find_all('script', src=True):
        resources.append(script_tag['src'])

    # Descărcarea resurselor
    for resource in resources:
        resource_url = urljoin(page_url, resource)
        download_file(resource_url, folder)

# Exemplu de utilizare
page_url = 'https://saveeditor.spamton.com/'  # Înlocuiește cu URL-ul paginii tale
download_resources(page_url)

