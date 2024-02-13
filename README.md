
## Run Locally

Clone the project

```bash
  git clone https://github.com/kkapil94/bd-notes-app.git
```

Go to the project directory

```bash
  cd bd-notes-app
```

Install dependencies

```bash
  npm install
```

for adding the note

```bash
  node app.js add --title="Note's title" --body="Note's content"
```

for removing the note

```bash
  node app.js remove --title="Note's title" 
```

for reading the note

```bash
  node app.js read --title="Note's title you want to read"
```

for listing the saved notes

```bash
node app.js list
```
