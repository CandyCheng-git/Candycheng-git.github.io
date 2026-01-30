# Rebuild / run locally (Docker)
```
start "" "C:\Program Files\Docker\Docker\Docker Desktop.exe"
wsl --install
cd /mnt/c/Users/Candy/OneDrive/IT/CandyCheng-git/GithubProfile-2026/my-portfolio


docker run --rm -it \
  -p 3000:3000 \
  -v "$PWD":/app \
  -v candychengfolio_node_modules:/app/node_modules \
  candychengfolio:latest sh -lc "npm install && npm start"
```

# Redeploy on GitHub (best practice)

```
git status
git add .
git commit -m "Update portfolio content"
git push origin main

```