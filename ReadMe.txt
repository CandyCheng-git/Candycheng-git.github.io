# Rebuild / run locally (Docker)
```
start "" "C:\Program Files\Docker\Docker\Docker Desktop.exe"
wsl --install
cd /mnt/c/Users/Candy/OneDrive/IT/CandyCheng-git/GithubProfile-2026/Candycheng-git.github.io

## Build and Run
docker build -t candychengfolio:latest . && docker run --rm -it \
  -p 3000:3000 \
  -v "$PWD":/app \
  -v candychengfolio_node_modules:/app/node_modules \
  candychengfolio:latest sh -lc "npm install && npm start"

## Run Only
docker run --rm -it \
  -p 3001:3000 \
  -v "$PWD":/app \
  -v candychengfolio_node_modules:/app/node_modules \
  candychengfolio:latest sh -lc "HOST=0.0.0.0 npm start"

  
docker run --rm -it \
  -p 8080:3000 \
  -v "$PWD":/app \
  -v candychengfolio_node_modules:/app/node_modules \
  candychengfolio:latest sh -lc "HOST=0.0.0.0 npm start"
  
```

# Redeploy on GitHub (best practice)

```
git status
git add .
git commit -m "Update portfolio content"
git push origin main

```